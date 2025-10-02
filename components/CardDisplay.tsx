import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { getTarotInterpretation } from '../services/geminiService';
import { FULL_DECK, SPREADS } from '../constants';
import { saveReading, playDealSound, playChimeSound, startAmbientSound, stopAmbientSound, playAttuningSound } from '../services/audioService';
import type { Spread, DrawnCard, TarotCard, Reading } from '../types';
import { LoadingSpinner } from './LoadingSpinner';
import { BookIcon } from './icons/BookIcon';

interface ReadingScreenProps {
  spread: Spread;
  question: string;
  onReset: () => void;
}

const MagicalInkText: React.FC<{ text: string }> = ({ text }) => {
  const words = useMemo(() => text.split(' '), [text]);

  return (
    <>
      {words.map((word, index) => (
        <span key={index} className="opacity-0 animate-magical-ink" style={{ animationDelay: `${index * 40}ms` }}>
          {word}{' '}
        </span>
      ))}
    </>
  );
};

const getCardOfTheDay = (): DrawnCard[] => {
  const storedData = localStorage.getItem('cardOfTheDay');
  const today = new Date().toDateString();
  if (storedData) {
    const { date, cardName, isReversed } = JSON.parse(storedData);
    if (date === today) {
      const card = FULL_DECK.find(c => c.name === cardName);
      if(card) {
        return [{ card, position: SPREADS.find(s => s.isSpecial)!.positions[0], interpretation: null, isFlipped: true, isReversed }];
      }
    }
  }
  
  let weightedDeck: TarotCard[] = [];
  FULL_DECK.forEach(card => {
    const weight = card.suit === 'Major' ? 3 : 1; // Major Arcana are 3x more likely for Card of the Day
    for (let i = 0; i < weight; i++) {
      weightedDeck.push(card);
    }
  });
  
  const card = weightedDeck[Math.floor(Math.random() * weightedDeck.length)];
  const isReversed = Math.random() < 0.3; // Standard reversal chance for daily card

  localStorage.setItem('cardOfTheDay', JSON.stringify({ date: today, cardName: card.name, isReversed }));
  return [{ card, position: SPREADS.find(s => s.isSpecial)!.positions[0], interpretation: null, isFlipped: true, isReversed }];
};

const ReadingScreen: React.FC<ReadingScreenProps> = ({ spread, question, onReset }) => {
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const [interpretationsLoading, setInterpretationsLoading] = useState<boolean>(true);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number>(0);
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const drawCards = useCallback(() => {
    if (spread.isSpecial) {
      return getCardOfTheDay();
    }

    const suitKeywords = {
        Wands: ['career', 'work', 'project', 'passion', 'energy', 'action', 'create', 'build'],
        Cups: ['love', 'relationship', 'feeling', 'emotion', 'friend', 'family', 'heart'],
        Swords: ['conflict', 'challenge', 'thought', 'mind', 'truth', 'struggle', 'decision', 'anxiety', 'communicate'],
        Pentacles: ['money', 'finance', 'job', 'home', 'health', 'body', 'material', 'security', 'property']
    };
    const challengeKeywords = ['problem', 'fear', 'anxiety', 'struggle', 'block', 'obstacle', 'worry', 'conflict', 'stress'];
    
    const questionLower = question.toLowerCase();
    const relevantSuits = (Object.keys(suitKeywords) as (keyof typeof suitKeywords)[]).filter(suit => 
        suitKeywords[suit].some(keyword => questionLower.includes(keyword))
    );
    const hasChallenges = challengeKeywords.some(keyword => questionLower.includes(keyword));
    const reversedProbability = hasChallenges ? 0.5 : 0.3;

    let weightedDeck: TarotCard[] = [];
    FULL_DECK.forEach(card => {
        let weight = 1;
        if (card.suit === 'Major') {
            weight = 4;
        } else if (relevantSuits.includes(card.suit!)) {
            weight = 3;
        }
        for (let i = 0; i < weight; i++) {
            weightedDeck.push(card);
        }
    });

    const availableCards = [...weightedDeck];
    const drawnCardNames = new Set<string>();
    const chosenCards: DrawnCard[] = [];

    while (chosenCards.length < spread.cardCount && availableCards.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableCards.length);
        const card = availableCards.splice(randomIndex, 1)[0];

        if (!drawnCardNames.has(card.name)) {
            drawnCardNames.add(card.name);
            chosenCards.push({
                card,
                position: spread.positions[chosenCards.length],
                interpretation: null,
                isFlipped: false,
                isReversed: Math.random() < reversedProbability,
            });
        }
    }
    return chosenCards;
  }, [spread, question]);

  useEffect(() => {
    startAmbientSound();
    
    const runReading = async () => {
        // 1. Attune
        setStatusMessage("Attuning the deck to your question...");
        playAttuningSound();
        await new Promise(resolve => setTimeout(resolve, 2000));

        // 2. Draw & Deal
        setStatusMessage("Dealing the cards...");
        const initialCards = drawCards();
        setDrawnCards(initialCards);

        initialCards.forEach((_, index) => {
            setTimeout(() => {
                playDealSound();
                setDrawnCards(prev => prev.map((c, i) => i === index ? { ...c, isFlipped: true } : c));
            }, index * 200);
        });

        await new Promise(resolve => setTimeout(resolve, initialCards.length * 200 + 500));
        setStatusMessage(null);
        setInterpretationsLoading(true);

        // 3. Interpret
        let interpretationsComplete = true;
        for (const [index, cardData] of initialCards.entries()) {
            try {
                const interpretation = await getTarotInterpretation(cardData.card, cardData.position, cardData.isReversed, question);
                if (interpretation.includes("celestial energies")) {
                  interpretationsComplete = false;
                }
                setDrawnCards(prev => {
                    const newCards = [...prev];
                    if(newCards[index]) newCards[index].interpretation = interpretation;
                    return newCards;
                });
                await new Promise(resolve => setTimeout(resolve, 1500)); // Increased Delay
            } catch (err) {
                console.error(err);
                const errorMessage = "The stars are cloudy at the moment. Please try again later.";
                setError(errorMessage);
                setDrawnCards(prev => {
                    const newCards = [...prev];
                    if(newCards[index]) newCards[index].interpretation = errorMessage;
                    return newCards;
                });
                interpretationsComplete = false;
            }
        }

        if (interpretationsComplete) {
            playChimeSound();
        }
        setInterpretationsLoading(false);
    };

    runReading();

    return () => {
        stopAmbientSound();
    };
  }, [spread, question, drawCards]);
  
  const handleSelectCard = (index: number) => {
    if (index === selectedCardIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedCardIndex(index);
      setIsTransitioning(false);
    }, 300);
  }
  
  const handleSaveReading = useCallback(() => {
    const reading: Reading = {
      id: new Date().toISOString(),
      spreadName: spread.name,
      date: new Date().toLocaleDateString(),
      cards: drawnCards.map(({ card, position, interpretation, isReversed }) => ({ card, position, interpretation, isReversed })),
      question: question
    };
    saveReading(reading);
    setIsSaved(true);
  }, [drawnCards, spread.name, question]);

  const selectedCard = useMemo(() => drawnCards[selectedCardIndex], [drawnCards, selectedCardIndex]);

  if (statusMessage) {
    return (
        <div className="w-full flex-grow flex flex-col items-center justify-center text-center animate-fade-in">
            <LoadingSpinner />
            <p className="text-xl text-amber-200 mt-4 italic">{statusMessage}</p>
        </div>
    );
  }

  if (!selectedCard) {
    return (
      <div className="w-full flex-grow flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }
  
  const cardKeywords = selectedCard.isReversed ? selectedCard.card.reversedKeywords || [] : selectedCard.card.keywords;

  return (
    <div className="w-full flex-grow grid md:grid-cols-12 gap-6 md:gap-10 animate-fade-in">
      <div className={`md:col-span-8 lg:col-span-9 flex flex-col items-center transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {question && (
            <div className="w-full mb-6 p-4 bg-black/20 border border-amber-500/10 rounded-lg">
                <p className="text-amber-300 text-sm font-bold tracking-wider uppercase">Your Question:</p>
                <p className="text-amber-100 text-lg italic">"{question}"</p>
            </div>
        )}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-center animate-cross-fade-in">
          <div className="flex justify-center perspective-1000">
            <img
              src={selectedCard.card.image}
              alt={selectedCard.card.name}
              className={`w-64 md:w-80 object-contain rounded-xl shadow-2xl shadow-black/50 border-4 border-amber-200/20 transition-transform duration-500 ${selectedCard.isReversed ? 'rotate-180' : ''}`}
            />
          </div>
          <div className="text-center lg:text-left">
            <p className="text-xl text-amber-300 font-bold">{selectedCard.position.title}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{selectedCard.card.name} {selectedCard.isReversed && <span className="text-2xl text-amber-300">(Reversed)</span>}</h2>
            <p className="text-amber-300 mb-4 italic">{selectedCard.isReversed ? selectedCard.card.reversedDescription || selectedCard.card.description : selectedCard.card.description}</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
              {cardKeywords.map((keyword) => (
                <span key={keyword} className="bg-black/20 text-amber-200 text-xs font-medium px-3 py-1 rounded-full">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg w-full mt-6 min-h-[120px] flex items-center justify-center border border-amber-500/10">
          {(interpretationsLoading && !selectedCard.interpretation) ? (
            <LoadingSpinner />
          ) : (
            <p className="text-amber-100 text-lg leading-relaxed">
              {selectedCard.interpretation ? <MagicalInkText text={selectedCard.interpretation} /> : error}
            </p>
          )}
        </div>
      </div>

      <div className="md:col-span-4 lg:col-span-3 bg-black/30 p-4 rounded-lg flex flex-col border border-amber-500/10">
        <h3 className="text-2xl font-bold text-center mb-4 text-amber-200">{spread.name}</h3>
        <div className="flex-grow space-y-2 overflow-y-auto pr-2">
          {drawnCards.map((item, index) => (
            <button
              key={index}
              onClick={() => handleSelectCard(index)}
              className={`w-full text-left p-2 rounded-lg flex items-center gap-4 transition-all duration-300 ${selectedCardIndex === index ? 'bg-amber-500/20 shadow-lg shadow-amber-500/10' : 'hover:bg-white/5'}`}
            >
              <img src={item.card.image} alt={item.card.name} className={`w-12 h-20 object-cover rounded-md transition-transform duration-500 flex-shrink-0 animate-deal-in ${item.isReversed ? 'rotate-180' : ''}`} style={{animationDelay: `${index * 100}ms`}} />

              <div className="overflow-hidden">
                <p className="font-bold text-amber-200 text-sm truncate">{item.position.title}</p>
                <p className="text-white truncate">{item.card.name}</p>
              </div>
            </button>
          ))}
        </div>
        <div className="mt-4 flex flex-col gap-2">
            {!spread.isSpecial && (
              <button
                onClick={handleSaveReading}
                disabled={interpretationsLoading || isSaved}
                className="w-full bg-amber-800 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <BookIcon className="w-5 h-5"/>
                {isSaved ? 'Saved to Journal' : 'Save Reading'}
              </button>
            )}
            <button
              onClick={onReset}
              className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
            >
              New Reading
            </button>
        </div>
      </div>
    </div>
  );
};

export default ReadingScreen;
