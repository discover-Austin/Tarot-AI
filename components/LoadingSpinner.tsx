import React, { useState, useEffect } from 'react';
import { getJournal, clearJournal, updateJournalEntry } from '../services/audioService';
import { FULL_DECK } from '../constants';
import type { JournalEntry, TarotCard } from '../types';
import type { View } from '../App';
import { CheckIcon } from './icons/CheckIcon';

// --- LoadingSpinner.tsx ---
export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-amber-300"></div>
    </div>
  );
};


// --- Nav.tsx ---
interface NavProps {
  currentView: View;
  setView: (view: View) => void;
}

const Nav: React.FC<NavProps> = ({ currentView, setView }) => {
  const navItems: { view: View; label: string }[] = [
    { view: 'home', label: 'New Reading' },
    { view: 'journal', label: 'Journal' },
    { view: 'library', label: 'Card Library' },
  ];

  return (
    <nav className="bg-black/30 backdrop-blur-sm rounded-lg p-2 w-full max-w-sm mx-auto mb-6 border border-amber-500/10">
      <ul className="flex justify-around">
        {navItems.map(({ view, label }) => {
            const isActive = currentView === view || (currentView === 'reading' && view === 'home');
            return (
              <li key={view} className="flex-1">
                <button
                  onClick={() => setView(view)}
                  className={`w-full px-3 py-2 text-sm md:text-base rounded-md transition-all duration-300 relative overflow-hidden group ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-amber-200 hover:text-white'
                  }`}
                >
                  <span className={`absolute inset-0 rounded-md transition-all duration-300 ${
                    isActive
                      ? 'bg-amber-600/80 animate-glow'
                      : 'bg-transparent group-hover:bg-white/5'
                  }`}></span>
                  <span className="relative z-10">{label}</span>
                </button>
              </li>
            )
        })}
      </ul>
    </nav>
  );
};
export default Nav;


// --- JournalScreen.tsx ---
export const JournalScreen: React.FC = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [saveStatus, setSaveStatus] = useState<Record<string, 'idle' | 'saving' | 'saved'>>({});

  useEffect(() => {
    const journalEntries = getJournal();
    setEntries(journalEntries);
    const initialNotes = journalEntries.reduce((acc, entry) => {
      acc[entry.id] = entry.userNotes || '';
      return acc;
    }, {} as Record<string, string>);
    setNotes(initialNotes);
  }, []);

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear your entire journal? This cannot be undone.')) {
      clearJournal();
      setEntries([]);
      setNotes({});
    }
  };
  
  const handleSaveNotes = (entryId: string) => {
    const entry = entries.find(e => e.id === entryId);
    if (!entry) return;
    setSaveStatus(prev => ({ ...prev, [entryId]: 'saving' }));
    const updatedEntry: JournalEntry = { ...entry, userNotes: notes[entryId] };
    updateJournalEntry(updatedEntry);
    setEntries(prev => prev.map(e => e.id === entryId ? updatedEntry : e));
    setTimeout(() => {
        setSaveStatus(prev => ({ ...prev, [entryId]: 'saved' }));
        setTimeout(() => {
            setSaveStatus(prev => ({ ...prev, [entryId]: 'idle' }));
        }, 2000);
    }, 500);
  };

  return (
    <div className="w-full max-w-4xl text-white animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl md:text-5xl font-bold">Your Journal</h1>
        {entries.length > 0 && (
          <button onClick={handleClear} className="bg-red-800/80 hover:bg-red-700/80 text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors">
            Clear All
          </button>
        )}
      </div>
      {entries.length === 0 ? (
        <p className="text-amber-200 text-center text-lg">Your journal is empty. Saved readings will appear here.</p>
      ) : (
        <div className="space-y-4">
          {entries.map(entry => (
            <div key={entry.id} className="bg-black/20 backdrop-blur-sm border border-amber-500/10 rounded-xl p-4 transition-all hover:border-amber-400/50">
              <button onClick={() => setExpandedId(expandedId === entry.id ? null : entry.id)} className="w-full text-left">
                <div className="flex justify-between items-center">
                  <div className="overflow-hidden">
                    <p className="font-bold text-xl text-amber-200">{entry.spreadName}</p>
                    <p className="text-sm text-amber-300">{entry.date}</p>
                    {entry.question && <p className="text-sm text-amber-200 italic mt-1 max-w-md truncate">"{entry.question}"</p>}
                  </div>
                  <div className="flex -space-x-8 flex-shrink-0">
                    {entry.cards.slice(0, 5).map(c => <img key={c.card.name} src={c.card.image} alt={c.card.name} className={`w-12 h-20 object-cover rounded-md border-2 border-stone-900/50 shadow-lg transition-transform ${c.isReversed ? 'rotate-180' : ''}`}/>)}
                  </div>
                </div>
              </button>
              {expandedId === entry.id && (
                <div className="mt-4 border-t border-amber-500/10 pt-4 space-y-4 animate-fade-in">
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                     {entry.cards.map(c => (
                       <img key={c.card.name} src={c.card.image} alt={c.card.name} title={`${c.position.title}: ${c.card.name}`} className={`w-16 h-auto object-cover rounded-md border-2 border-stone-900/50 shadow-lg transition-transform ${c.isReversed ? 'rotate-180' : ''}`}/>
                     ))}
                  </div>

                  {entry.cards.map(c => (
                     <div key={c.card.name} className="p-3 bg-black/20 rounded-lg">
                        <p className="font-bold text-lg">{c.position.title}: {c.card.name} {c.isReversed && <span className="text-sm text-amber-300">(Reversed)</span>}</p>
                        <p className="text-amber-200 leading-relaxed italic mt-1">{c.interpretation}</p>
                     </div>
                  ))}
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-amber-200 mb-2">My Notes & Reflections</h3>
                    <textarea
                        value={notes[entry.id] || ''}
                        onChange={e => setNotes(prev => ({ ...prev, [entry.id]: e.target.value }))}
                        placeholder="Add your thoughts on this reading..."
                        className="w-full h-32 p-3 bg-stone-900/70 border border-amber-500/20 rounded-lg text-amber-100 focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all"
                    />
                    <div className="text-right mt-2">
                      <button 
                        onClick={() => handleSaveNotes(entry.id)}
                        className="py-2 px-5 bg-amber-600 hover:bg-amber-500 text-stone-900 font-bold rounded-lg transition-colors text-sm disabled:opacity-50 flex items-center justify-center gap-2"
                        disabled={saveStatus[entry.id] === 'saving'}
                      >
                         {saveStatus[entry.id] === 'saving' ? 'Saving...' : saveStatus[entry.id] === 'saved' ? <><CheckIcon className="w-4 h-4" /> Saved!</> : 'Save Notes'}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


// --- LibraryScreen.tsx ---
type SuitFilter = 'Major' | 'Wands' | 'Cups' | 'Swords' | 'Pentacles';

export const LibraryScreen: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null);
  const [activeFilter, setActiveFilter] = useState<SuitFilter>('Major');

  const filters: { label: string; suit: SuitFilter }[] = [
    { label: 'Major Arcana', suit: 'Major' },
    { label: 'Wands', suit: 'Wands' },
    { label: 'Cups', suit: 'Cups' },
    { label: 'Swords', suit: 'Swords' },
    { label: 'Pentacles', suit: 'Pentacles' },
  ];

  const filteredCards = FULL_DECK.filter(card => card.suit === activeFilter);
  const currentTitle = filters.find(f => f.suit === activeFilter)?.label || 'Card Library';

  return (
    <div className="w-full max-w-6xl text-white animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">{currentTitle}</h1>

      <div className="flex justify-center flex-wrap gap-2 mb-8">
        {filters.map(({ label, suit }) => (
          <button
            key={suit}
            onClick={() => setActiveFilter(suit)}
            className={`px-4 py-2 text-sm font-bold rounded-full transition-colors duration-300 ${
              activeFilter === suit
                ? 'bg-amber-600 text-white shadow-lg'
                : 'bg-black/20 text-amber-200 hover:bg-white/5'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 gap-4">
        {filteredCards.map(card => (
          <button key={card.name} onClick={() => setSelectedCard(card)} className="group">
            <img 
              src={card.image} 
              alt={card.name} 
              className="w-full h-auto object-cover rounded-lg transition-all duration-300 shadow-lg group-hover:scale-105"
              style={{ filter: 'brightness(0.9)', transition: 'filter 300ms, transform 300ms' }}
              onMouseOver={e => e.currentTarget.style.filter = 'brightness(1.1) drop-shadow(0 0 10px rgba(252, 211, 77, 0.7))'}
              onMouseOut={e => e.currentTarget.style.filter = 'brightness(0.9)'}
            />
            <p className="text-xs text-center mt-2 font-semibold text-amber-200 group-hover:text-white transition-colors">{card.name}</p>
          </button>
        ))}
      </div>

      {selectedCard && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedCard(null)}>
          <div className="bg-gradient-to-br from-stone-800 to-stone-900 p-6 rounded-xl border border-amber-500/20 max-w-2xl w-full flex flex-col md:flex-row items-center text-center md:text-left gap-6 animate-fade-in-up" onClick={e => e.stopPropagation()}>
            <img src={selectedCard.image} alt={selectedCard.name} className="w-48 md:w-56 rounded-lg shadow-xl flex-shrink-0"/>
            <div className="max-h-[80vh] w-full overflow-y-auto pr-2">
              <h2 className="text-3xl font-bold text-white mb-2">{selectedCard.name}</h2>
              <div className="flex justify-center md:justify-start gap-6 mb-3 text-amber-200">
                <div className="text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-amber-400">Element</p>
                    <p className="text-lg font-bold">{Array.isArray(selectedCard.element) ? selectedCard.element.join(', ') : selectedCard.element}</p>
                </div>
                <div className="text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-amber-400">Sign/Planet</p>
                    <p className="text-lg font-bold">{Array.isArray(selectedCard.zodiacSign) ? selectedCard.zodiacSign.join(', ') : selectedCard.zodiacSign}</p>
                </div>
              </div>
              <hr className="border-amber-500/10 my-3" />
              <div className="mb-3">
                <h3 className="font-bold text-amber-200">Upright</h3>
                <p className="text-amber-300 text-sm italic mb-2">{selectedCard.description}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-1">
                  {selectedCard.keywords.map(kw => <span key={kw} className="bg-black/20 text-amber-300 text-xs font-medium px-2 py-0.5 rounded-full">{kw}</span>)}
                </div>
              </div>
               <hr className="border-amber-500/10 my-3" />
               <div className="mb-3">
                <h3 className="font-bold text-amber-200">Reversed</h3>
                <p className="text-amber-300 text-sm italic mb-2">{selectedCard.reversedDescription}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-1">
                  {(selectedCard.reversedKeywords || []).map(kw => <span key={kw} className="bg-black/20 text-amber-300 text-xs font-medium px-2 py-0.5 rounded-full">{kw}</span>)}
                </div>
              </div>
              <div className="text-center md:text-right mt-4">
                <button onClick={() => setSelectedCard(null)} className="bg-white/5 hover:bg-white/10 text-white font-bold py-2 px-6 rounded-lg">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
