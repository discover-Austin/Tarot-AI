import React, { useState, useCallback } from 'react';
import type { Spread } from './types';
import HomeScreen from './components/WelcomeScreen';
import ReadingScreen from './components/CardDisplay';
import Nav, { JournalScreen, LibraryScreen } from './components/LoadingSpinner';

export type View = 'home' | 'reading' | 'journal' | 'library';

const DustMotes: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="dust-mote"
        style={{
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          left: `${-10 + Math.random() * 10}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 20}s`,
          animationDuration: `${15 + Math.random() * 15}s`,
        }}
      />
    ))}
  </div>
);

const Starfield: React.FC = () => (
  <div className="starfield-bg">
    <div id="stars1"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
  </div>
);


const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [activeSpread, setActiveSpread] = useState<Spread | null>(null);
  const [activeQuestion, setActiveQuestion] = useState<string>('');

  const handleStartReading = useCallback((spread: Spread, question: string) => {
    setActiveSpread(spread);
    setActiveQuestion(question);
    setView('reading');
  }, []);

  const handleNavigate = useCallback((newView: View) => {
    setView(newView);
  }, []);
  
  const renderView = () => {
    switch (view) {
      case 'reading':
        return <ReadingScreen spread={activeSpread!} question={activeQuestion} onReset={() => setView('home')} />;
      case 'journal':
        return <JournalScreen />;
      case 'library':
        return <LibraryScreen />;
      case 'home':
      default:
        return <HomeScreen onStartReading={handleStartReading} />;
    }
  };

  const customTailwindConfig = `
    <style>
    /* New gold glow animation */
    @keyframes glow {
      0%, 100% { box-shadow: 0 0 8px rgba(252, 211, 77, 0.5), 0 0 12px rgba(252, 211, 77, 0.4); }
      50% { box-shadow: 0 0 16px rgba(252, 211, 77, 0.7), 0 0 24px rgba(252, 211, 77, 0.6); }
    }
    .animate-glow {
        animation: glow 3s infinite ease-in-out;
    }
    
    /* Re-used animations */
    @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
    .animate-fade-in { animation: fade-in 1s ease-in-out forwards; }
    @keyframes fade-out { from { opacity: 1; } to { opacity: 0; } }
    .animate-fade-out { animation: fade-out 0.3s ease-in-out forwards; }
    .animate-fade-in-fast { animation: fade-in 0.3s ease-in-out forwards; }
    @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
    @keyframes cross-fade-in {
      from { opacity: 0.3; }
      to { opacity: 1; }
    }
    .animate-cross-fade-in { animation: cross-fade-in 0.5s ease-in-out forwards; }


    /* Card flip animation */
    .perspective-1000 { perspective: 1000px; }
    @keyframes flip-in {
        from { transform: rotateY(180deg) scale(0.7); opacity: 0; }
        to { transform: rotateY(0deg) scale(1); opacity: 1; }
    }
    .card-flipper {
        transform-style: preserve-3d;
        animation: flip-in 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }
    .card-front, .card-back {
        position: absolute; width: 100%; height: 100%;
        -webkit-backface-visibility: hidden; backface-visibility: hidden;
        border-radius: 0.75rem;
    }
    .card-back { transform: rotateY(180deg); }
    .animation-delay-500ms { animation-delay: 500ms; }

    /* New Carnival Theme Animations */
    @keyframes deal-in {
      from { transform: translateY(-100%) translateX(20%) rotate(15deg); opacity: 0; }
      to { transform: translateY(0) translateX(0) rotate(0deg); opacity: 1; }
    }
    .animate-deal-in {
      animation: deal-in 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
      opacity: 0; /* Start hidden */
    }

    @keyframes magical-ink {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-magical-ink {
      animation: magical-ink 0.6s ease-out forwards;
    }
    
    /* Dust Motes */
    .dust-mote {
      position: absolute;
      background-color: rgba(252, 211, 77, 0.6);
      border-radius: 50%;
      opacity: 0;
      animation: drift 20s infinite linear;
    }
    @keyframes drift {
      0% { transform: translateX(0) translateY(0); opacity: 0; }
      10% { opacity: 0.7; }
      90% { opacity: 0.7; }
      100% { transform: translateX(100vw) translateY(-10vh); opacity: 0; }
    }
    
    /* Starfield Background */
    .starfield-bg {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      z-index: 0;
      pointer-events: none;
    }
    @function multiple-box-shadow($n) {
      $value: '#{random(2000)}px #{random(2000)}px #FFF';
      @for $i from 2 through $n {
        $value: '#{$value} , #{random(2000)}px #{random(2000)}px #FFF';
      }
      @return unquote($value);
    }
    $shadows-small: multiple-box-shadow(700);
    $shadows-medium: multiple-box-shadow(200);
    $shadows-big: multiple-box-shadow(100);

    #stars1, #stars2, #stars3 {
      width: 1px; height: 1px;
      background: transparent;
      box-shadow: $shadows-small;
      animation: animStar 50s linear infinite;
      position: absolute;
      border-radius: 50%;
    }
    #stars2 {
      width: 2px; height: 2px;
      box-shadow: $shadows-medium;
      animation: animStar 100s linear infinite;
    }
    #stars3 {
      width: 3px; height: 3px;
      box-shadow: $shadows-big;
      animation: animStar 150s linear infinite;
    }
    @keyframes animStar {
      from { transform: translateY(0px) rotate(0deg); }
      to { transform: translateY(-2000px) rotate(360deg); }
    }
    
    /* NOTE: The above SASS functions for box-shadow won't work directly here. They are placeholders for the concept. We need to pre-generate the shadows. For this demo, let's use a simpler background approach. */
    .starfield-bg {
      background: 
        radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
      overflow: hidden;
      position: absolute; inset: 0; z-index: -1;
    }
    .star-twinkle {
      position: absolute;
      background-color: white;
      border-radius: 50%;
      animation: twinkle 5s infinite;
    }
    @keyframes twinkle {
      0%, 100% { opacity: 0; }
      50% { opacity: 1; }
    }
    </style>
  `;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: customTailwindConfig }} />
      <main className="min-h-screen bg-[#382e27] text-amber-50 p-4 flex flex-col relative overflow-hidden" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/wood-pattern.png')" }}>
        <Starfield />
        <DustMotes />
        <div className="relative z-10 flex flex-col flex-grow w-full max-w-7xl mx-auto">
          <Nav currentView={view} setView={handleNavigate} />
          <div className="flex-grow flex justify-center items-center py-8">
            {renderView()}
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
