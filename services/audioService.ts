import type { JournalEntry, Reading } from '../types';

const JOURNAL_KEY = 'geminiTarotJournal';

export const getJournal = (): JournalEntry[] => {
  try {
    const journalData = localStorage.getItem(JOURNAL_KEY);
    return journalData ? JSON.parse(journalData) : [];
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return [];
  }
};

export const saveReading = (reading: Reading): void => {
  try {
    const journal = getJournal();
    const newEntry: JournalEntry = { ...reading, userNotes: '' };
    const updatedJournal = [newEntry, ...journal];
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updatedJournal));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};

export const updateJournalEntry = (updatedEntry: JournalEntry): void => {
  try {
    const journal = getJournal();
    const entryIndex = journal.findIndex(entry => entry.id === updatedEntry.id);
    if (entryIndex > -1) {
      journal[entryIndex] = updatedEntry;
      localStorage.setItem(JOURNAL_KEY, JSON.stringify(journal));
    }
  } catch (error) {
    console.error("Error updating journal entry in localStorage:", error);
  }
};

export const clearJournal = (): void => {
  try {
    localStorage.removeItem(JOURNAL_KEY);
  } catch (error) {
    console.error("Error clearing localStorage:", error);
  }
};

// --- AUDIO ---
const audioContext = typeof window !== 'undefined' ? new (window.AudioContext || (window as any).webkitAudioContext)() : null;

// --- Sound Effects ---
const playSound = (type: OscillatorType, frequency: number, duration: number, volume: number) => {
  if (!audioContext) return;
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

  gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + duration);
};

export const playDrawSound = () => {
    playSound('sawtooth', 120, 0.3, 0.15);
    setTimeout(() => playSound('sawtooth', 80, 0.3, 0.15), 60);
};

export const playDealSound = () => {
    playSound('sawtooth', 80, 0.15, 0.1);
};

export const playChimeSound = () => {
    playSound('sine', 987.77, 0.5, 0.2); // B5
    setTimeout(() => playSound('sine', 1318.51, 0.5, 0.15), 150); // E6
};

export const playAttuningSound = () => {
    if (!audioContext) return;
    const duration = 2.0;
    const baseFreq = 80; // A low hum
    const volume = 0.1;

    // Main oscillator (the hum)
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(baseFreq, audioContext.currentTime);

    // LFO for vibrato
    const lfo = audioContext.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(5, audioContext.currentTime); // Vibrato speed

    // Gain node to control LFO depth
    const lfoGain = audioContext.createGain();
    lfoGain.gain.setValueAtTime(3, audioContext.currentTime); // Vibrato depth (in Hz)

    // Main gain for volume envelope
    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 0.5); // Fade in
    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + duration); // Fade out

    // Connections
    lfo.connect(lfoGain);
    lfoGain.connect(oscillator.frequency); // LFO modulates oscillator frequency
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Start and stop
    lfo.start(audioContext.currentTime);
    oscillator.start(audioContext.currentTime);
    lfo.stop(audioContext.currentTime + duration);
    oscillator.stop(audioContext.currentTime + duration);
};

// --- Ambient Sound ---
interface AudioState {
    droneNode: OscillatorNode | null;
    droneNode2: OscillatorNode | null;
    gainNode: GainNode | null;
    chimeInterval: number | null;
    carouselInterval: number | null;
}

const audioState: AudioState = {
    droneNode: null,
    droneNode2: null,
    gainNode: null,
    chimeInterval: null,
    carouselInterval: null,
};

const playAmbientChime = () => {
    if (!audioContext || !audioState.gainNode) return;
    const chimeFreqs = [1046.50, 1318.51, 1567.98, 2093.00]; // C6, E6, G6, C7
    const freq = chimeFreqs[Math.floor(Math.random() * chimeFreqs.length)];
    const duration = 1.5;
    const volume = 0.08;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
    gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);

    oscillator.connect(gainNode);
    gainNode.connect(audioState.gainNode);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

const playCarouselNote = (frequency: number, startTime: number, duration: number) => {
    if (!audioContext || !audioState.gainNode) return;
    
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(frequency, startTime);

    const lfo = audioContext.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(5, startTime); 

    const lfoGain = audioContext.createGain();
    lfoGain.gain.setValueAtTime(5, startTime);

    lfo.connect(lfoGain);
    lfoGain.connect(oscillator.frequency);

    const envelope = audioContext.createGain();
    envelope.gain.setValueAtTime(0, startTime);
    envelope.gain.linearRampToValueAtTime(0.04, startTime + 0.02);
    envelope.gain.linearRampToValueAtTime(0, startTime + duration);

    oscillator.connect(envelope);
    envelope.connect(audioState.gainNode);

    oscillator.start(startTime);
    lfo.start(startTime);
    oscillator.stop(startTime + duration);
    lfo.stop(startTime + duration);
};

const playCarouselArpeggio = () => {
    if (!audioContext) return;
    const now = audioContext.currentTime;
    const noteDuration = 0.2;
    const notes = [392.00, 493.88, 587.33, 783.99]; // G Major arpeggio (G4, B4, D5, G5)
    
    notes.forEach((note, index) => {
        playCarouselNote(note, now + index * noteDuration, noteDuration);
    });
};

export const startAmbientSound = () => {
    if (!audioContext || audioState.droneNode) return;
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }

    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + 3);
    gainNode.connect(audioContext.destination);
    audioState.gainNode = gainNode;

    const drone1 = audioContext.createOscillator();
    drone1.type = 'sine';
    drone1.frequency.setValueAtTime(60, audioContext.currentTime);

    const drone2 = audioContext.createOscillator();
    drone2.type = 'sine';
    drone2.frequency.setValueAtTime(120.5, audioContext.currentTime);

    const droneGain1 = audioContext.createGain();
    droneGain1.gain.value = 0.3;
    const droneGain2 = audioContext.createGain();
    droneGain2.gain.value = 0.15;

    drone1.connect(droneGain1);
    drone2.connect(droneGain2);

    const droneMasterGain = audioContext.createGain();
    droneGain1.connect(droneMasterGain);
    droneGain2.connect(droneMasterGain);
    droneMasterGain.gain.value = 0.2;
    droneMasterGain.connect(gainNode);

    drone1.start();
    drone2.start();
    audioState.droneNode = drone1;
    audioState.droneNode2 = drone2;
    
    const scheduleChime = () => {
        playAmbientChime();
        const nextTime = 5000 + Math.random() * 6000;
        audioState.chimeInterval = window.setTimeout(scheduleChime, nextTime);
    };
    scheduleChime();

    const scheduleCarousel = () => {
        playCarouselArpeggio();
        const nextTime = 14000 + Math.random() * 10000;
        audioState.carouselInterval = window.setTimeout(scheduleCarousel, nextTime);
    }
    scheduleCarousel();
};

export const stopAmbientSound = () => {
    if (!audioContext || !audioState.gainNode) return;

    audioState.gainNode.gain.cancelScheduledValues(audioContext.currentTime);
    audioState.gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 1.5);

    setTimeout(() => {
        audioState.droneNode?.stop();
        audioState.droneNode2?.stop();

        if (audioState.chimeInterval) clearTimeout(audioState.chimeInterval);
        if (audioState.carouselInterval) clearTimeout(audioState.carouselInterval);
        
        audioState.droneNode = null;
        audioState.droneNode2 = null;
        audioState.gainNode = null;
        audioState.chimeInterval = null;
        audioState.carouselInterval = null;
    }, 1500);
};