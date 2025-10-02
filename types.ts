export interface TarotCard {
  name: string;
  image: string;
  keywords: string[];
  description: string;
  reversedKeywords?: string[];
  reversedDescription?: string;
  element: string | string[];
  zodiacSign: string | string[];
  suit?: 'Major' | 'Wands' | 'Cups' | 'Swords' | 'Pentacles';
}

export interface SpreadPosition {
  title: string;
  prompt: string;
}

export interface Spread {
  name: string;
  cardCount: number;
  description: string;
  positions: SpreadPosition[];
  isSpecial?: boolean; // For special spreads like "Card of the Day"
}

export interface DrawnCard {
  card: TarotCard;
  position: SpreadPosition;
  interpretation: string | null;
  isFlipped: boolean;
  isReversed: boolean;
}

export interface Reading {
  id: string;
  spreadName: string;
  date: string;
  cards: Omit<DrawnCard, 'isFlipped'>[];
  question?: string;
}

export interface JournalEntry extends Reading {
    userNotes?: string;
}