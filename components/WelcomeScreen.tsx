import React, { useState } from 'react';
import { SPREADS } from '../constants';
import type { Spread } from '../types';
import { SparklesIcon } from './icons/SparklesIcon';

interface HomeScreenProps {
  onStartReading: (spread: Spread, question: string) => void;
}

const QuestionModal: React.FC<{ spread: Spread; onClose: () => void; onStart: (question: string) => void; }> = ({ spread, onClose, onStart }) => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStart(question);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in-fast" onClick={onClose}>
      <div className="bg-gradient-to-br from-stone-800 to-stone-900 p-8 rounded-xl border border-amber-500/20 max-w-lg w-full shadow-2xl shadow-black/50 animate-fade-in-up" onClick={e => e.stopPropagation()}>
        <h2 className="text-3xl font-bold text-center mb-2 text-amber-100">Focus Your Intent</h2>
        <p className="text-amber-300 text-center mb-6">What question will you ask the cards for your "{spread.name}" reading?</p>
        <form onSubmit={handleSubmit}>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g., What should I focus on in my career right now?"
            className="w-full h-28 p-3 bg-stone-900/70 border border-amber-500/20 rounded-lg text-amber-100 focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all"
          />
          <div className="flex justify-end gap-4 mt-6">
            <button type="button" onClick={onClose} className="py-2 px-6 bg-white/5 hover:bg-white/10 text-white font-bold rounded-lg transition-colors">
              Cancel
            </button>
            <button type="submit" className="py-2 px-6 bg-amber-600 hover:bg-amber-500 text-stone-900 font-bold rounded-lg transition-colors shadow-lg shadow-amber-500/20">
              Begin Reading
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


const HomeScreen: React.FC<HomeScreenProps> = ({ onStartReading }) => {
  const [modalSpread, setModalSpread] = useState<Spread | null>(null);

  const cardOfTheDaySpread = SPREADS.find(s => s.isSpecial);
  const regularSpreads = SPREADS.filter(s => !s.isSpecial);

  const handleSelectSpread = (spread: Spread) => {
    if (spread.isSpecial) {
      onStartReading(spread, ''); // Card of the Day has a default question
    } else {
      setModalSpread(spread);
    }
  };

  return (
    <>
      {modalSpread && (
        <QuestionModal
          spread={modalSpread}
          onClose={() => setModalSpread(null)}
          onStart={(question) => {
            onStartReading(modalSpread, question);
            setModalSpread(null);
          }}
        />
      )}
      <div className="text-center text-amber-50 animate-fade-in w-full h-full flex flex-col justify-center items-center perspective-1000">
        <h1 className="text-6xl md:text-8xl font-bold mb-2 text-shadow-lg shadow-black/50">Gemini Tarot</h1>
        <p className="text-xl md:text-2xl text-amber-100 mb-12 font-sans tracking-wider">
          The cards await your question.
        </p>

        <div className="relative w-full max-w-5xl h-[500px]">
          {/* Velvet Runner */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-gradient-to-b from-[#7e2236] via-[#6a1c2d] to-[#7e2236] shadow-2xl shadow-black/50 rounded-lg" style={{ boxShadow: 'inset 0 0 40px rgba(0,0,0,0.6)' }}></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center">
            {/* Card of the Day */}
            {cardOfTheDaySpread && (
              <div className="mb-8 z-10 group" style={{ transform: 'translateZ(20px)' }}>
                <button
                  onClick={() => handleSelectSpread(cardOfTheDaySpread)}
                  className="bg-amber-600/20 hover:bg-amber-500/30 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out text-lg animate-glow border-2 border-amber-400/50"
                >
                  <span className="flex items-center justify-center">
                    <SparklesIcon className="w-6 h-6 mr-3" />
                    Draw Your Card of the Day
                  </span>
                </button>
              </div>
            )}

            {/* Regular Spreads */}
            <div className="flex justify-center items-center gap-8" style={{ transform: 'rotateX(50deg) scale(0.9) translateY(80px)'}}>
              {regularSpreads.map((spread) => (
                <div 
                  key={spread.name} 
                  className="group w-48 h-64 transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105"
                >
                  <button
                    onClick={() => handleSelectSpread(spread)}
                    className="w-full h-full bg-gradient-to-br from-stone-700 to-stone-800 rounded-xl p-4 flex flex-col items-center justify-between shadow-lg shadow-black/50 border border-amber-500/20 transition-all duration-300 group-hover:border-amber-400/50 group-hover:shadow-amber-400/10"
                  >
                    <h2 className="text-2xl font-bold text-amber-200">{spread.name}</h2>
                    <p className="text-amber-300 text-sm">{spread.cardCount} {spread.cardCount > 1 ? 'Cards' : 'Card'}</p>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;