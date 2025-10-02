import type { TarotCard, Spread } from './types';

export const MAJOR_ARCANA: TarotCard[] = [
  { 
    name: 'The Fool', 
    suit: 'Major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg', 
    keywords: ['Beginnings', 'Innocence', 'Spontaneity', 'Free Spirit'], 
    description: 'Represents new beginnings, faith in the future, and embracing the unknown.',
    reversedKeywords: ['Recklessness', 'Being Taken Advantage Of', 'Inconsideration', 'Risk-taking'],
    reversedDescription: 'Indicates naivety, foolishness, or a disregard for consequences. A leap of faith could be a misstep.',
    element: 'Air',
    zodiacSign: 'Uranus (Aquarius)'
  },
  { 
    name: 'The Magician', 
    suit: 'Major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg', 
    keywords: ['Manifestation', 'Resourcefulness', 'Power', 'Inspired Action'], 
    description: 'Symbolizes the power to manifest your desires through skill, willpower, and creativity.',
    reversedKeywords: ['Manipulation', 'Poor Planning', 'Untapped Talents', 'Deception'],
    reversedDescription: 'Suggests manipulation or a misuse of power. Your plans may be ill-conceived or your talents are going to waste.',
    element: 'Air',
    zodiacSign: 'Mercury (Gemini, Virgo)'
  },
  { 
    name: 'The High Priestess', 
    suit: 'Major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg', 
    keywords: ['Intuition', 'Sacred Knowledge', 'Divine Feminine', 'The Subconscious Mind'], 
    description: 'Embodies intuition, mystery, and the connection to the subconscious mind.',
    reversedKeywords: ['Secrets', 'Disconnected from Intuition', 'Hidden Agendas', 'Withdrawal'],
    reversedDescription: 'Warns of secrets and a disconnect from your intuition. You may be ignoring your inner voice or something is being hidden from you.',
    element: 'Water',
    zodiacSign: 'Moon (Cancer)'
  },
  { 
    name: 'The Empress', 
    suit: 'Major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg', 
    keywords: ['Femininity', 'Beauty', 'Nature', 'Nurturing', 'Abundance'], 
    description: 'Signifies nurturing, abundance, fertility, and a deep connection to the natural world.',
    reversedKeywords: ['Creative Block', 'Dependence on Others', 'Smothering', 'Insecurity'],
    reversedDescription: 'Points to a creative block or feeling stifled. There could be an overbearing influence or a lack of self-worth affecting your growth.',
    element: 'Earth',
    zodiacSign: 'Venus (Taurus, Libra)'
  },
  { 
    name: 'The Emperor', 
    suit: 'Major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg', 
    keywords: ['Authority', 'Establishment', 'Structure', 'A Father Figure'], 
    description: 'Represents structure, authority, stability, and the establishment of order.',
    reversedKeywords: ['Domination', 'Excessive Control', 'Lack of Discipline', 'Rigidity'],
    reversedDescription: 'Suggests an abuse of power, excessive control, or a complete lack of structure. Rigidity is preventing progress.',
    element: 'Fire',
    zodiacSign: 'Aries'
  },
  { 
    name: 'The Hierophant', 
    suit: 'Major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg', 
    keywords: ['Spiritual Wisdom', 'Religious Beliefs', 'Conformity', 'Tradition', 'Institutions'], 
    description: 'Relates to tradition, spiritual guidance, and conventional institutions or beliefs.',
    reversedKeywords: ['Personal Beliefs', 'Freedom', 'Challenging the Status Quo', 'Rebellion'],
    reversedDescription: 'Indicates a break from tradition and a need to forge your own path. You are questioning dogma and seeking personal freedom.',
    element: 'Earth',
    zodiacSign: 'Taurus'
  },
  { 
    name: 'The Lovers', 
    suit: 'Major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg', 
    keywords: ['Love', 'Harmony', 'Relationships', 'Values Alignment', 'Choices'], 
    description: 'Indicates meaningful connections, choices from the heart, and finding harmony in relationships.',
    reversedKeywords: ['Disharmony', 'Imbalance', 'Misalignment of Values', 'Conflict'],
    reversedDescription: 'Suggests relationship troubles, disharmony, and a conflict in values. A choice needs to be made, but it is fraught with difficulty.',
    element: 'Air',
    zodiacSign: 'Gemini'
  },
  { 
    name: 'The Chariot', 
    suit: 'Major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg', 
    keywords: ['Control', 'Willpower', 'Victory', 'Assertion', 'Determination'], 
    description: 'Symbolizes determination, willpower, and overcoming obstacles through focused control.',
    reversedKeywords: ['Lack of Control', 'Lack of Direction', 'Aggression', 'Obstacles'],
    reversedDescription: 'Warns of a lack of control and direction. Your ambition may be turning into aggression, or you feel your progress is blocked.',
    element: 'Water',
    zodiacSign: 'Cancer'
  },
  { 
    name: 'Strength', 
    suit: 'Major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg', 
    keywords: ['Strength', 'Courage', 'Patience', 'Control', 'Compassion'], 
    description: 'Represents inner courage, compassion, and mastering one\'s instincts with gentle power.',
    reversedKeywords: ['Inner Strength', 'Self-Doubt', 'Weakness', 'Insecurity'],
    reversedDescription: 'Indicates self-doubt and a lack of inner strength. You may be feeling insecure or that your own power is working against you.',
    element: 'Fire',
    zodiacSign: 'Leo'
  },
  { 
    name: 'The Hermit', 
    suit: 'Major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg', 
    keywords: ['Soul-searching', 'Introspection', 'Being Alone', 'Inner Guidance'], 
    description: 'Signifies introspection, soul-searching, and seeking inner wisdom through solitude.',
    reversedKeywords: ['Isolation', 'Loneliness', 'Withdrawal', 'Paranoia'],
    reversedDescription: 'Suggests that introspection has turned into unhealthy isolation. You may be feeling lonely or withdrawing too much from the world.',
    element: 'Earth',
    zodiacSign: 'Virgo'
  },
  { 
    name: 'Wheel of Fortune', 
    suit: 'Major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg', 
    keywords: ['Good Luck', 'Karma', 'Life Cycles', 'Destiny', 'A Turning Point'], 
    description: 'Indicates cycles, destiny, turning points, and the inevitable ups and downs of life.',
    reversedKeywords: ['Bad Luck', 'Resisting Change', 'Breaking Cycles', 'Negative Forces'],
    reversedDescription: 'Warns of a downturn or unexpected bad luck. You may be resisting an inevitable change or feel that external forces are against you.',
    element: 'Fire',
    zodiacSign: 'Jupiter (Sagittarius)'
  },
  { 
    name: 'Justice', 
    suit: 'Major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg', 
    keywords: ['Justice', 'Fairness', 'Truth', 'Cause and Effect', 'Law'], 
    description: 'Represents fairness, truth, karmic balance, and the consequences of one\'s actions.',
    reversedKeywords: ['Unfairness', 'Lack of Accountability', 'Dishonesty', 'Injustice'],
    reversedDescription: 'Points to injustice, dishonesty, or an unwillingness to take responsibility for your actions. A situation is not being judged fairly.',
    element: 'Air',
    zodiacSign: 'Libra'
  },
  { 
    name: 'The Hanged Man', 
    suit: 'Major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg', 
    keywords: ['Pause', 'Surrender', 'Letting Go', 'New Perspectives'], 
    description: 'Symbolizes surrender, seeing things from a new perspective, and pausing for reflection.',
    reversedKeywords: ['Delays', 'Resistance', 'Stalling', 'Indecision'],
    reversedDescription: 'Indicates resistance to change and a refusal to let go. You are stalling, leading to stagnation and missed opportunities.',
    element: 'Water',
    zodiacSign: 'Neptune (Pisces)'
  },
  { 
    name: 'Death', 
    suit: 'Major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg', 
    keywords: ['Endings', 'Change', 'Transformation', 'Transition'], 
    description: 'Signifies major transformation, endings that lead to new beginnings, and letting go of the old.',
    reversedKeywords: ['Resistance to Change', 'Personal Transformation', 'Inner Purging', 'Stagnation'],
    reversedDescription: 'Shows a powerful resistance to a necessary ending. You are clinging to the past, preventing your own transformation and growth.',
    element: 'Water',
    zodiacSign: 'Scorpio'
  },
  { 
    name: 'Temperance', 
    suit: 'Major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg', 
    keywords: ['Balance', 'Moderation', 'Patience', 'Purpose'], 
    description: 'Represents balance, moderation, patience, and the blending of opposing forces.',
    reversedKeywords: ['Imbalance', 'Excess', 'Re-alignment', 'Lack of Harmony'],
    reversedDescription: 'Points to imbalance and excess in your life. Something is out of harmony, and you need to re-evaluate and find your center.',
    element: 'Fire',
    zodiacSign: 'Sagittarius'
  },
  { 
    name: 'The Devil', 
    suit: 'Major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg', 
    keywords: ['Shadow Self', 'Attachment', 'Addiction', 'Restriction', 'Sexuality'], 
    description: 'Indicates attachment, materialism, and confronting the shadow self to achieve liberation.',
    reversedKeywords: ['Releasing Limiting Beliefs', 'Breaking Free', 'Detachment', 'Reclaiming Power'],
    reversedDescription: 'Signifies breaking free from addiction, restriction, or negative patterns. You are reclaiming your power and finding freedom.',
    element: 'Earth',
    zodiacSign: 'Capricorn'
  },
  { 
    name: 'The Tower', 
    suit: 'Major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg', 
    keywords: ['Sudden Change', 'Upheaval', 'Chaos', 'Revelation', 'Awakening'], 
    description: 'Symbolizes sudden upheaval, dramatic change, and the destruction of false structures.',
    reversedKeywords: ['Avoidance of Disaster', 'Fear of Change', 'Resisting Destruction', 'Internal Upheaval'],
    reversedDescription: 'Indicates a fear of change that is preventing a necessary transformation. You are avoiding a disaster, but the internal pressure is building.',
    element: 'Fire',
    zodiacSign: 'Mars (Aries)'
  },
  { 
    name: 'The Star', 
    suit: 'Major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg', 
    keywords: ['Hope', 'Faith', 'Purpose', 'Rejuvenation', 'Spirituality'], 
    description: 'Represents hope, inspiration, spiritual guidance, and a sense of peace and renewal.',
    reversedKeywords: ['Lack of Faith', 'Despair', 'Discouragement', 'Disconnection'],
    reversedDescription: 'Suggests a loss of hope and faith. You may feel disconnected from your purpose and spiritually lost in the dark.',
    element: 'Air',
    zodiacSign: 'Aquarius'
  },
  { 
    name: 'The Moon', 
    suit: 'Major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg', 
    keywords: ['Illusion', 'Fear', 'Anxiety', 'Subconscious', 'Intuition'], 
    description: 'Embodies illusion, intuition, and navigating the fears and mysteries of the subconscious.',
    reversedKeywords: ['Release of Fear', 'Repressed Emotion', 'Inner Confusion', 'Clarity'],
    reversedDescription: 'Indicates that confusion is clearing and fears are being released. You are gaining clarity on a situation that was previously shrouded in mystery.',
    element: 'Water',
    zodiacSign: 'Pisces'
  },
  { 
    name: 'The Sun', 
    suit: 'Major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg', 
    keywords: ['Positivity', 'Fun', 'Warmth', 'Success', 'Vitality'], 
    description: 'Signifies joy, success, vitality, and the radiant clarity of self-expression.',
    reversedKeywords: ['Inner Child', 'Feeling Down', 'Overly Optimistic', 'Lack of Success'],
    reversedDescription: 'Suggests temporary sadness or a lack of clarity. Your inner light is dimmed, or you may be overly optimistic about a situation.',
    element: 'Fire',
    zodiacSign: 'Sun (Leo)'
  },
  { 
    name: 'Judgement', 
    suit: 'Major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg', 
    keywords: ['Judgement', 'Rebirth', 'Inner Calling', 'Absolution'], 
    description: 'Represents rebirth, a spiritual awakening, and making a significant life decision.',
    reversedKeywords: ['Self-Doubt', 'Inner Critic', 'Ignoring the Call', 'Fear of Change'],
    reversedDescription: 'Points to self-doubt and being overly critical of yourself. You are ignoring your inner calling out of fear.',
    element: 'Fire',
    zodiacSign: 'Pluto (Scorpio)'
  },
  { 
    name: 'The World', 
    suit: 'Major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg', 
    keywords: ['Completion', 'Integration', 'Accomplishment', 'Travel'], 
    description: 'Symbolizes completion, successful integration, and the joyful fulfillment of a cycle.',
    reversedKeywords: ['Lack of Completion', 'Lack of Closure', 'Shortcuts', 'Delays'],
    reversedDescription: 'Indicates a lack of completion or closure. You may be taking shortcuts or feeling that you are stuck right before the finish line.',
    element: 'Earth',
    zodiacSign: 'Saturn (Capricorn)'
  },
];

export const MINOR_ARCANA: TarotCard[] = [
  // --- WANDS (Fire) ---
  {
    name: 'Ace of Wands',
    suit: 'Wands',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg',
    keywords: ['Inspiration', 'New ideas', 'Creation', 'Beginnings'],
    description: 'A spark of new energy and creative potential. It signifies a new beginning, a new idea, or a new venture with passion.',
    reversedKeywords: ['Delays', 'Lack of motivation', 'Hesitation', 'Creative blocks'],
    reversedDescription: 'A lack of energy or passion. You may be feeling uninspired or hesitant to start a new project.',
    element: 'Fire',
    zodiacSign: 'Aries, Leo, Sagittarius'
  },
  {
    name: 'Two of Wands',
    suit: 'Wands',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Wands02.jpg',
    keywords: ['Future planning', 'Progress', 'Decisions', 'Discovery'],
    description: 'You are at a point of planning and decision-making, looking ahead to the future with confidence.',
    reversedKeywords: ['Fear of unknown', 'Lack of planning', 'Indecision', 'Playing it safe'],
    reversedDescription: 'Indecision and a fear of the unknown are holding you back. A lack of planning could lead to missed opportunities.',
    element: 'Fire',
    zodiacSign: 'Aries, Leo, Sagittarius'
  },
  {
    name: 'Three of Wands',
    suit: 'Wands',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Wands03.jpg',
    keywords: ['Expansion', 'Foresight', 'Overseas opportunities', 'Growth'],
    description: 'Your plans are in motion, and you are beginning to see the first signs of success. This card encourages looking ahead and expanding your horizons.',
    reversedKeywords: ['Obstacles', 'Delays', 'Frustration', 'Lack of foresight'],
    reversedDescription: 'Progress is stalled due to unforeseen obstacles. You may need to reassess your plans and be patient.',
    element: 'Fire',
    zodiacSign: 'Aries, Leo, Sagittarius'
  },
  {
    name: 'Four of Wands',
    suit: 'Wands',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Wands04.jpg',
    keywords: ['Celebration', 'Harmony', 'Marriage', 'Homecoming'],
    description: 'A time of joy, celebration, and stability. This card often signifies a happy event, a harmonious home life, or a significant milestone.',
    reversedKeywords: ['Lack of support', 'Instability', 'Feeling unwelcome', 'Transition'],
    reversedDescription: 'There is a sense of instability or a lack of harmony in your home or relationships. A celebration may be postponed.',
    element: 'Fire',
    zodiacSign: 'Aries, Leo, Sagittarius'
  },
  {
    name: 'Five of Wands',
    suit: 'Wands',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Wands05.jpg',
    keywords: ['Conflict', 'Competition', 'Disagreements', 'Tension'],
    description: 'Represents conflict and competition. While it can indicate struggles, it often points to healthy competition that encourages growth.',
    reversedKeywords: ['Avoiding conflict', 'Inner conflict', 'Resolution', 'Finding common ground'],
    reversedDescription: 'You are either avoiding a necessary conflict or have found a way to resolve disagreements and find peace.',
    element: 'Fire',
    zodiacSign: 'Aries, Leo, Sagittarius'
  },
  {
    name: 'Six of Wands',
    suit: 'Wands',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Wands06.jpg',
    keywords: ['Success', 'Public recognition', 'Victory', 'Confidence'],
    description: 'Signifies victory, success, and public acclaim. Your hard work is paying off, and you are being recognized for your achievements.',
    reversedKeywords: ['Egotism', 'Lack of recognition', 'Failure', 'Self-doubt'],
    reversedDescription: 'A lack of success or recognition is causing self-doubt. Be wary of letting pride get in the way of progress.',
    element: 'Fire',
    zodiacSign: 'Aries, Leo, Sagittarius'
  },
  {
    name: 'Seven of Wands',
    suit: 'Wands',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Wands07.jpg',
    keywords: ['Challenge', 'Competition', 'Perseverance', 'Defensive'],
    description: 'You are in a position of strength, defending your beliefs or achievements against challenges. Perseverance is key.',
    reversedKeywords: ['Giving up', 'Overwhelmed', 'Exhaustion', 'Compromise'],
    reversedDescription: 'Feeling overwhelmed by challenges may lead you to give up or make a disadvantageous compromise. You may feel your position is indefensible.',
    element: 'Fire',
    zodiacSign: 'Aries, Leo, Sagittarius'
  },
  {
    name: 'Eight of Wands',
    suit: 'Wands',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Wands08.jpg',
    keywords: ['Rapid action', 'Movement', 'Quick decisions', 'News'],
    description: 'A card of swift action, progress, and communication. Expect rapid developments and important news coming your way.',
    reversedKeywords: ['Delays', 'Frustration', 'Slowing down', 'Miscommunication'],
    reversedDescription: 'Things are slowing down, leading to frustration. Be prepared for delays and potential miscommunications.',
    element: 'Fire',
    zodiacSign: 'Aries, Leo, Sagittarius'
  },
  {
    name: 'Nine of Wands',
    suit: 'Wands',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Wands09.jpg',
    keywords: ['Resilience', 'Courage', 'Persistence', 'Last stand'],
    description: 'You are nearing the end of a struggle, wounded but not beaten. This card represents resilience and the final push needed to succeed.',
    reversedKeywords: ['Exhaustion', 'Paranoia', 'Giving up', 'Defensiveness'],
    reversedDescription: 'You are feeling exhausted and on the verge of giving up. Paranoia or stubbornness might be preventing you from moving forward.',
    element: 'Fire',
    zodiacSign: 'Aries, Leo, Sagittarius'
  },
  {
    name: 'Ten of Wands',
    suit: 'Wands',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Wands10.jpg',
    keywords: ['Burden', 'Responsibility', 'Hard work', 'Stress'],
    description: 'You are carrying a heavy burden, but the end is in sight. This card signifies taking on too much responsibility.',
    reversedKeywords: ['Letting go', 'Delegating', 'Release', 'Overwhelmed'],
    reversedDescription: 'You are learning to delegate or release your burdens. It is time to let go of what is no longer serving you.',
    element: 'Fire',
    zodiacSign: 'Aries, Leo, Sagittarius'
  },
  {
    name: 'Page of Wands',
    suit: 'Wands',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Wands11.jpg',
    keywords: ['Enthusiasm', 'Exploration', 'Free spirit', 'New ideas'],
    description: 'Embodies youthful energy, enthusiasm, and a desire to explore new ideas and possibilities. A messenger of exciting new opportunities.',
    reversedKeywords: ['Haste', 'Lack of direction', 'Inexperience', 'Uninspired'],
    reversedDescription: 'A lack of direction or creative passion. You may be acting hastily without a clear plan.',
    element: 'Fire',
    zodiacSign: 'Aries, Leo, Sagittarius'
  },
  {
    name: 'Knight of Wands',
    suit: 'Wands',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Wands12.jpg',
    keywords: ['Energy', 'Passion', 'Adventure', 'Action'],
    description: 'Represents a person of action, full of energy and passion. This card encourages you to pursue your goals with vigor and confidence.',
    reversedKeywords: ['Impulsiveness', 'Haste', 'Frustration', 'Delays'],
    reversedDescription: 'Acting impulsively without thinking can lead to trouble. Expect delays and frustration if you rush.',
    element: 'Fire',
    zodiacSign: 'Aries, Leo, Sagittarius'
  },
  {
    name: 'Queen of Wands',
    suit: 'Wands',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Wands13.jpg',
    keywords: ['Confidence', 'Courage', 'Independence', 'Social'],
    description: 'A charismatic and independent leader. This card embodies courage, confidence, and a passion for life that inspires others.',
    reversedKeywords: ['Intimidation', 'Jealousy', 'Insecurity', 'Demanding'],
    reversedDescription: 'Insecurity or jealousy may be causing you to act in a demanding or intimidating way. Your inner fire is being stifled.',
    element: 'Fire',
    zodiacSign: 'Aries, Leo, Sagittarius'
  },
  {
    name: 'King of Wands',
    suit: 'Wands',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Wands14.jpg',
    keywords: ['Leadership', 'Vision', 'Entrepreneur', 'Honor'],
    description: 'A natural leader with a clear vision. This card represents taking control of your life and inspiring others with your passion and determination.',
    reversedKeywords: ['Impulsive', 'Hasty', 'Ruthless', 'High expectations'],
    reversedDescription: 'A tendency to be impulsive or overly demanding. Your high expectations might be unrealistic or lead to ruthless behavior.',
    element: 'Fire',
    zodiacSign: 'Aries, Leo, Sagittarius'
  },

  // --- CUPS (Water) ---
  {
    name: 'Ace of Cups',
    suit: 'Cups',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Cups01.jpg',
    keywords: ['New love', 'Emotions', 'Creativity', 'Relationships'],
    description: 'A new beginning in love, emotions, and creativity. This card signifies an outpouring of feelings and the start of a deep connection.',
    reversedKeywords: ['Blocked emotions', 'Repressed feelings', 'Emptiness', 'Lost opportunity'],
    reversedDescription: 'Your emotions are blocked or repressed. You may be feeling empty or have missed an opportunity for emotional connection.',
    element: 'Water',
    zodiacSign: 'Cancer, Scorpio, Pisces'
  },
  {
    name: 'Two of Cups',
    suit: 'Cups',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Cups02.jpg',
    keywords: ['Unified love', 'Partnership', 'Mutual attraction', 'Connection'],
    description: 'Represents a deep connection and partnership, often romantic. It speaks of mutual respect, love, and understanding.',
    reversedKeywords: ['Break-up', 'Disharmony', 'Distrust', 'Imbalance'],
    reversedDescription: 'A relationship is out of balance, leading to disharmony or a potential break-up. There may be a lack of trust.',
    element: 'Water',
    zodiacSign: 'Cancer, Scorpio, Pisces'
  },
  {
    name: 'Three of Cups',
    suit: 'Cups',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Cups03.jpg',
    keywords: ['Celebration', 'Friendship', 'Creativity', 'Community'],
    description: 'A card of joyful celebration, friendship, and community. It is a time for sharing happiness with others.',
    reversedKeywords: ['Gossip', 'Overindulgence', 'Isolation', 'Third-party interference'],
    reversedDescription: 'Celebrations are marred by gossip or overindulgence. You may feel isolated from your community, or a third person is causing issues.',
    element: 'Water',
    zodiacSign: 'Cancer, Scorpio, Pisces'
  },
  {
    name: 'Four of Cups',
    suit: 'Cups',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Cups04.jpg',
    keywords: ['Apathy', 'Contemplation', 'Disconnection', 'Re-evaluation'],
    description: 'A time of contemplation and introspection. You may feel apathetic or disconnected, missing opportunities being offered to you.',
    reversedKeywords: ['Sudden awareness', 'Choosing happiness', 'Accepting help', 'Moving on'],
    reversedDescription: 'You are coming out of a period of apathy and are ready to seize new opportunities. It is time to move on.',
    element: 'Water',
    zodiacSign: 'Cancer, Scorpio, Pisces'
  },
  {
    name: 'Five of Cups',
    suit: 'Cups',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Cups05.jpg',
    keywords: ['Loss', 'Regret', 'Disappointment', 'Grief'],
    description: 'Focusing on loss and regret. This card reminds you that while there is sadness, there are still positive aspects to be found if you shift your perspective.',
    reversedKeywords: ['Forgiveness', 'Moving on', 'Acceptance', 'Finding peace'],
    reversedDescription: 'You are learning to accept your losses and are ready to move on. Forgiveness, of yourself or others, is key.',
    element: 'Water',
    zodiacSign: 'Cancer, Scorpio, Pisces'
  },
  {
    name: 'Six of Cups',
    suit: 'Cups',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Cups06.jpg',
    keywords: ['Nostalgia', 'Childhood memories', 'Innocence', 'Reunion'],
    description: 'A card of nostalgia and happy memories. It can signify a reunion with someone from your past or a return to a familiar place.',
    reversedKeywords: ['Stuck in the past', 'Moving forward', 'Leaving home', 'Rose-tinted glasses'],
    reversedDescription: 'You are either stuck in the past or are ready to let go of it and move forward. Be careful not to idealize what was.',
    element: 'Water',
    zodiacSign: 'Cancer, Scorpio, Pisces'
  },
  {
    name: 'Seven of Cups',
    suit: 'Cups',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Cups07.jpg',
    keywords: ['Choices', 'Illusion', 'Fantasy', 'Daydreaming'],
    description: 'You are faced with many choices, but not all are what they seem. Be wary of illusion and wishful thinking.',
    reversedKeywords: ['Clarity', 'Making a decision', 'Focus', 'Reality check'],
    reversedDescription: 'You are gaining clarity and are ready to make a decision based on reality, not fantasy.',
    element: 'Water',
    zodiacSign: 'Cancer, Scorpio, Pisces'
  },
  {
    name: 'Eight of Cups',
    suit: 'Cups',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Cups08.jpg',
    keywords: ['Walking away', 'Disappointment', 'Abandonment', 'Seeking truth'],
    description: 'A time to walk away from a situation that is no longer emotionally fulfilling. You are on a journey to find deeper meaning.',
    reversedKeywords: ['Trying one more time', 'Fear of moving on', 'Stagnation', 'Clinging to the past'],
    reversedDescription: 'You are hesitating to move on, possibly out of fear or a feeling that you should give it one more try.',
    element: 'Water',
    zodiacSign: 'Cancer, Scorpio, Pisces'
  },
  {
    name: 'Nine of Cups',
    suit: 'Cups',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Cups09.jpg',
    keywords: ['Wishes fulfilled', 'Contentment', 'Satisfaction', 'Gratitude'],
    description: 'The "wish card," it signifies that your desires are coming true. A time of contentment, pleasure, and gratitude.',
    reversedKeywords: ['Unfulfilled wishes', 'Dissatisfaction', 'Materialism', 'Smugness'],
    reversedDescription: 'Your wishes are not being fulfilled, leading to dissatisfaction. Be careful that your desires are not purely materialistic.',
    element: 'Water',
    zodiacSign: 'Cancer, Scorpio, Pisces'
  },
  {
    name: 'Ten of Cups',
    suit: 'Cups',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Cups10.jpg',
    keywords: ['Divine love', 'Happy family', 'Harmony', 'Completion'],
    description: 'Represents ultimate emotional fulfillment and happiness. It speaks of a harmonious family life and loving relationships.',
    reversedKeywords: ['Broken home', 'Disharmony', 'Unhappy family', 'Misaligned values'],
    reversedDescription: 'There is disharmony in your family or relationships. Your values may not be aligned with those you love.',
    element: 'Water',
    zodiacSign: 'Cancer, Scorpio, Pisces'
  },
  {
    name: 'Page of Cups',
    suit: 'Cups',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Cups11.jpg',
    keywords: ['Creative opportunities', 'Intuition', 'Curiosity', 'A messenger'],
    description: 'A messenger of creative and emotional news. This card encourages you to be open to your intuition and express your feelings.',
    reversedKeywords: ['Emotional immaturity', 'Creative block', 'Insecurity', 'Daydreaming'],
    reversedDescription: 'You are experiencing a creative block or are being emotionally immature. It is time to stop daydreaming and face reality.',
    element: 'Water',
    zodiacSign: 'Cancer, Scorpio, Pisces'
  },
  {
    name: 'Knight of Cups',
    suit: 'Cups',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Cups12.jpg',
    keywords: ['Romance', 'Charming', 'Imaginative', 'An offer'],
    description: 'A classic romantic and charmer. This card often signifies a proposal or an invitation, and encourages you to follow your heart.',
    reversedKeywords: ['Unrealistic', 'Jealousy', 'Moodiness', 'Deception'],
    reversedDescription: 'Be wary of someone who is emotionally manipulative or unrealistic. An offer may not be what it seems.',
    element: 'Water',
    zodiacSign: 'Cancer, Scorpio, Pisces'
  },
  {
    name: 'Queen of Cups',
    suit: 'Cups',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Cups13.jpg',
    keywords: ['Compassionate', 'Intuitive', 'Calm', 'Nurturing'],
    description: 'A highly intuitive and compassionate person. This card asks you to trust your feelings and lead with your heart.',
    reversedKeywords: ['Emotional insecurity', 'Co-dependency', 'Martyrdom', 'Overly sensitive'],
    reversedDescription: 'You are feeling emotionally insecure or are being overly sensitive. Be careful not to fall into a pattern of co-dependency.',
    element: 'Water',
    zodiacSign: 'Cancer, Scorpio, Pisces'
  },
  {
    name: 'King of Cups',
    suit: 'Cups',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Cups14.jpg',
    keywords: ['Emotional balance', 'Control', 'Generosity', 'Wisdom'],
    description: 'Represents mastery over the emotional realm. This king is calm, compassionate, and wise, offering balanced advice.',
    reversedKeywords: ['Emotional manipulation', 'Moodiness', 'Volatility', 'Coldness'],
    reversedDescription: 'A tendency to be emotionally manipulative or volatile. You may be repressing your feelings, leading to coldness.',
    element: 'Water',
    zodiacSign: 'Cancer, Scorpio, Pisces'
  },

  // --- SWORDS (Air) ---
  {
    name: 'Ace of Swords',
    suit: 'Swords',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Swords01.jpg',
    keywords: ['Breakthrough', 'Clarity', 'New ideas', 'Truth'],
    description: 'A moment of breakthrough and mental clarity. This card cuts through confusion to reveal the truth.',
    reversedKeywords: ['Confusion', 'Misinformation', 'Lack of clarity', 'Poor judgment'],
    reversedDescription: 'You are experiencing confusion and a lack of clarity. Be wary of making decisions based on misinformation.',
    element: 'Air',
    zodiacSign: 'Gemini, Libra, Aquarius'
  },
  {
    name: 'Two of Swords',
    suit: 'Swords',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Swords02.jpg',
    keywords: ['Difficult choices', 'Stalemate', 'Indecision', 'Blocked emotions'],
    description: 'You are at a crossroads, unwilling or unable to make a decision. This card signifies a stalemate.',
    reversedKeywords: ['Indecision', 'Confusion', 'Information overload', 'Seeing the truth'],
    reversedDescription: 'You are overwhelmed with information and unable to make a choice. Alternatively, the blindfold is coming off, and you are seeing the truth.',
    element: 'Air',
    zodiacSign: 'Gemini, Libra, Aquarius'
  },
  {
    name: 'Three of Swords',
    suit: 'Swords',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Swords03.jpg',
    keywords: ['Heartbreak', 'Sorrow', 'Painful truth', 'Grief'],
    description: 'A card of painful realization, sorrow, and heartbreak. It represents a difficult truth that must be faced to move on.',
    reversedKeywords: ['Releasing pain', 'Forgiveness', 'Healing', 'Optimism'],
    reversedDescription: 'You are in the process of healing from a painful experience. It is a time for forgiveness and releasing sorrow.',
    element: 'Air',
    zodiacSign: 'Gemini, Libra, Aquarius'
  },
  {
    name: 'Four of Swords',
    suit: 'Swords',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Swords04.jpg',
    keywords: ['Rest', 'Recuperation', 'Meditation', 'Contemplation'],
    description: 'A time for rest and recovery after a period of stress. This card encourages contemplation and quiet introspection.',
    reversedKeywords: ['Exhaustion', 'Burnout', 'Stagnation', 'Forced rest'],
    reversedDescription: 'You are on the verge of burnout and need to take a break. Ignoring this can lead to forced rest through illness or exhaustion.',
    element: 'Air',
    zodiacSign: 'Gemini, Libra, Aquarius'
  },
  {
    name: 'Five of Swords',
    suit: 'Swords',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Swords05.jpg',
    keywords: ['Conflict', 'Defeat', 'Winning at all costs', 'Betrayal'],
    description: 'A card of conflict where there are no true winners. It warns against ambition that leads to harming others and hollow victories.',
    reversedKeywords: ['Reconciliation', 'Making amends', 'Moving on', 'Regret'],
    reversedDescription: 'A time for reconciliation and making amends. You may regret past actions and are seeking to move on from conflict.',
    element: 'Air',
    zodiacSign: 'Gemini, Libra, Aquarius'
  },
  {
    name: 'Six of Swords',
    suit: 'Swords',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Swords06.jpg',
    keywords: ['Transition', 'Moving on', 'Rite of passage', 'Leaving behind'],
    description: 'Represents a necessary transition, moving from a difficult past toward a more hopeful future. It is a journey to calmer waters.',
    reversedKeywords: ['Resistance to change', 'Unfinished business', 'Stuck', 'Emotional baggage'],
    reversedDescription: 'You are resisting a necessary change or are being held back by unfinished business and emotional baggage.',
    element: 'Air',
    zodiacSign: 'Gemini, Libra, Aquarius'
  },
  {
    name: 'Seven of Swords',
    suit: 'Swords',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Swords07.jpg',
    keywords: ['Deception', 'Betrayal', 'Strategy', 'Getting away with something'],
    description: 'A card of strategy, but also potential deception. It can mean using your wits to succeed, or it can warn of betrayal and dishonesty.',
    reversedKeywords: ['Confession', 'Guilt', 'Facing consequences', 'Honesty'],
    reversedDescription: 'A time for coming clean and facing the consequences of your actions. Honesty is the best policy.',
    element: 'Air',
    zodiacSign: 'Gemini, Libra, Aquarius'
  },
  {
    name: 'Eight of Swords',
    suit: 'Swords',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Swords08.jpg',
    keywords: ['Restriction', 'Limiting beliefs', 'Self-imposed prison', 'Victim mentality'],
    description: 'You feel trapped and restricted, but the prison is of your own making. This card points to limiting beliefs and a victim mentality.',
    reversedKeywords: ['Freedom', 'Release', 'New perspective', 'Taking control'],
    reversedDescription: 'You are breaking free from self-imposed restrictions and taking control of your life. A new perspective brings freedom.',
    element: 'Air',
    zodiacSign: 'Gemini, Libra, Aquarius'
  },
  {
    name: 'Nine of Swords',
    suit: 'Swords',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Swords09.jpg',
    keywords: ['Anxiety', 'Worry', 'Fear', 'Nightmares'],
    description: 'The "nightmare" card, it represents deep anxiety, fear, and worry that keep you up at night. These fears are often worse in your mind than in reality.',
    reversedKeywords: ['Facing fears', 'Finding help', 'Release of worry', 'Recovery'],
    reversedDescription: 'You are finding the courage to face your fears or are seeking help to deal with your anxiety. Recovery is possible.',
    element: 'Air',
    zodiacSign: 'Gemini, Libra, Aquarius'
  },
  {
    name: 'Ten of Swords',
    suit: 'Swords',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords10.jpg',
    keywords: ['Painful endings', 'Betrayal', 'Rock bottom', 'Defeat'],
    description: 'A card of finality and painful endings. While it represents hitting rock bottom, it also means the only way is up. The worst is over.',
    reversedKeywords: ['Recovery', 'Resisting the end', 'Healing', 'Innevitable end'],
    reversedDescription: 'You are slowly recovering from a painful ending, or you are resisting an inevitable conclusion, prolonging the pain.',
    element: 'Air',
    zodiacSign: 'Gemini, Libra, Aquarius'
  },
  {
    name: 'Page of Swords',
    suit: 'Swords',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Swords11.jpg',
    keywords: ['Curiosity', 'Truth-seeking', 'Energy', 'Ideas'],
    description: 'Full of energy and a thirst for knowledge. This page is curious and communicative, but can also be blunt or gossipy.',
    reversedKeywords: ['Gossip', 'Cynicism', 'Defensiveness', 'Scattered energy'],
    reversedDescription: 'A tendency to engage in harmful gossip or to be overly defensive. Your energy may be scattered, leading to a lack of focus.',
    element: 'Air',
    zodiacSign: 'Gemini, Libra, Aquarius'
  },
  {
    name: 'Knight of Swords',
    suit: 'Swords',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Swords12.jpg',
    keywords: ['Ambitious', 'Action-oriented', 'Fast-thinking', 'Direct'],
    description: 'A powerful, ambitious force, this knight charges forward with intellectual prowess. This card encourages quick, decisive action.',
    reversedKeywords: ['Reckless', 'Hasty', 'Aggressive', 'Bullying'],
    reversedDescription: 'A tendency to be reckless and aggressive. Acting without thinking can lead to negative consequences.',
    element: 'Air',
    zodiacSign: 'Gemini, Libra, Aquarius'
  },
  {
    name: 'Queen of Swords',
    suit: 'Swords',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords13.jpg',
    keywords: ['Independent', 'Unbiased judgment', 'Clear boundaries', 'Intellect'],
    description: 'A sharp, intelligent, and independent thinker. This queen values truth and honesty, and has clear boundaries.',
    reversedKeywords: ['Cold-hearted', 'Bitter', 'Critical', 'Judgmental'],
    reversedDescription: 'A tendency to be overly critical, bitter, or emotionally cold. Past hurts may be clouding your judgment.',
    element: 'Air',
    zodiacSign: 'Gemini, Libra, Aquarius'
  },
  {
    name: 'King of Swords',
    suit: 'Swords',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Swords14.jpg',
    keywords: ['Intellectual power', 'Authority', 'Truth', 'Justice'],
    description: 'A master of intellect and reason. This king is a just and ethical leader who values truth above all else.',
    reversedKeywords: ['Authoritarian', 'Manipulative', 'Tyrannical', 'Misuse of power'],
    reversedDescription: 'A tendency to misuse intellectual power, becoming manipulative or tyrannical. Your judgment may be clouded.',
    element: 'Air',
    zodiacSign: 'Gemini, Libra, Aquarius'
  },

  // --- PENTACLES (Earth) ---
  {
    name: 'Ace of Pentacles',
    suit: 'Pentacles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Pents01.jpg',
    keywords: ['New opportunity', 'Manifestation', 'Prosperity', 'Abundance'],
    description: 'A seed of opportunity in the material world. This card signifies a new job, financial opportunity, or the chance to manifest your goals.',
    reversedKeywords: ['Lost opportunity', 'Poor planning', 'Greed', 'Lack of foresight'],
    reversedDescription: 'You may have missed an opportunity due to poor planning or a lack of focus. Be wary of making decisions based on greed.',
    element: 'Earth',
    zodiacSign: 'Taurus, Virgo, Capricorn'
  },
  {
    name: 'Two of Pentacles',
    suit: 'Pentacles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Pents02.jpg',
    keywords: ['Juggling', 'Balance', 'Adaptability', 'Prioritization'],
    description: 'A card of balancing priorities, often related to finances or work. It requires adaptability and careful management.',
    reversedKeywords: ['Overwhelmed', 'Imbalance', 'Disorganization', 'Financial stress'],
    reversedDescription: 'You are feeling overwhelmed and struggling to maintain balance. Disorganization is leading to stress, especially in finances.',
    element: 'Earth',
    zodiacSign: 'Taurus, Virgo, Capricorn'
  },
  {
    name: 'Three of Pentacles',
    suit: 'Pentacles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Pents03.jpg',
    keywords: ['Teamwork', 'Collaboration', 'Skill', 'Mastery'],
    description: 'Represents successful collaboration and the recognition of skills. Your hard work and expertise are valued by others.',
    reversedKeywords: ['Lack of teamwork', 'Poor quality work', 'No recognition', 'Ego conflicts'],
    reversedDescription: 'A lack of collaboration or conflicts of ego are hindering progress. The quality of work may be suffering.',
    element: 'Earth',
    zodiacSign: 'Taurus, Virgo, Capricorn'
  },
  {
    name: 'Four of Pentacles',
    suit: 'Pentacles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Pents04.jpg',
    keywords: ['Control', 'Security', 'Possessiveness', 'Conservation'],
    description: 'A card of stability and control, but it warns against becoming too possessive or stingy. You are holding on tightly to what you have.',
    reversedKeywords: ['Generosity', 'Letting go', 'Financial insecurity', 'Reckless spending'],
    reversedDescription: 'You are either learning to be more generous and let go, or your fear of loss is leading to reckless financial decisions.',
    element: 'Earth',
    zodiacSign: 'Taurus, Virgo, Capricorn'
  },
  {
    name: 'Five of Pentacles',
    suit: 'Pentacles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Pents05.jpg',
    keywords: ['Hardship', 'Poverty', 'Isolation', 'Financial loss'],
    description: 'A card of financial hardship and feeling left out in the cold. It reminds you that help is often available if you are willing to ask for it.',
    reversedKeywords: ['Recovery', 'Finding help', 'End of hardship', 'Hope'],
    reversedDescription: 'You are beginning to recover from a period of financial hardship. Help has arrived, or you are finding a new sense of hope.',
    element: 'Earth',
    zodiacSign: 'Taurus, Virgo, Capricorn'
  },
  {
    name: 'Six of Pentacles',
    suit: 'Pentacles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Pents06.jpg',
    keywords: ['Generosity', 'Charity', 'Giving and receiving', 'Balance'],
    description: 'Represents a cycle of giving and receiving. It can signify receiving a gift or being in a position to help others generously.',
    reversedKeywords: ['Debt', 'Selfishness', 'One-sided charity', 'Strings attached'],
    reversedDescription: 'Be wary of gifts with strings attached or one-sided generosity. You may be in debt or acting out of selfishness.',
    element: 'Earth',
    zodiacSign: 'Taurus, Virgo, Capricorn'
  },
  {
    name: 'Seven of Pentacles',
    suit: 'Pentacles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Pents07.jpg',
    keywords: ['Patience', 'Investment', 'Hard work', 'Long-term view'],
    description: 'A moment to pause and assess your progress. Your hard work is beginning to bear fruit, but patience is needed for the full harvest.',
    reversedKeywords: ['Impatience', 'Lack of growth', 'Frustration', 'Wasted effort'],
    reversedDescription: 'You are feeling frustrated with a lack of progress. Your efforts may have been misplaced or you are being too impatient.',
    element: 'Earth',
    zodiacSign: 'Taurus, Virgo, Capricorn'
  },
  {
    name: 'Eight of Pentacles',
    suit: 'Pentacles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Pents08.jpg',
    keywords: ['Mastery', 'Skill', 'Diligence', 'Craftsmanship'],
    description: 'Dedicating yourself to mastering a skill. This card represents apprenticeship, hard work, and attention to detail.',
    reversedKeywords: ['Perfectionism', 'Repetitive work', 'Lack of ambition', 'Mediocrity'],
    reversedDescription: 'You may be stuck in a rut of repetitive work or are letting perfectionism prevent you from completing your tasks.',
    element: 'Earth',
    zodiacSign: 'Taurus, Virgo, Capricorn'
  },
  {
    name: 'Nine of Pentacles',
    suit: 'Pentacles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Pents09.jpg',
    keywords: ['Abundance', 'Luxury', 'Self-sufficiency', 'Financial independence'],
    description: 'Enjoying the fruits of your labor. This card signifies financial independence, luxury, and a comfortable life earned through hard work.',
    reversedKeywords: ['Financial dependency', 'Over-working', 'Empty success', 'Hustle culture'],
    reversedDescription: 'You may be working too hard and not enjoying your success, or your financial stability is dependent on others.',
    element: 'Earth',
    zodiacSign: 'Taurus, Virgo, Capricorn'
  },
  {
    name: 'Ten of Pentacles',
    suit: 'Pentacles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Pents10.jpg',
    keywords: ['Legacy', 'Wealth', 'Family', 'Long-term security'],
    description: 'Represents the culmination of long-term success, creating a lasting legacy for your family. A card of wealth, stability, and tradition.',
    reversedKeywords: ['Family disputes', 'Financial failure', 'Instability', 'Breaking tradition'],
    reversedDescription: 'There may be disputes over inheritance or finances within the family. You may be experiencing financial instability or are breaking from family traditions.',
    element: 'Earth',
    zodiacSign: 'Taurus, Virgo, Capricorn'
  },
  {
    name: 'Page of Pentacles',
    suit: 'Pentacles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Pents11.jpg',
    keywords: ['New opportunities', 'Diligence', 'Study', 'Manifestation'],
    description: 'A messenger of new opportunities in the material world. This page is a diligent student, ready to learn and manifest their goals.',
    reversedKeywords: ['Procrastination', 'Lack of focus', 'Missed opportunities', 'Daydreaming'],
    reversedDescription: 'You are procrastinating or lack the focus to pursue your goals. Daydreaming without action leads to missed opportunities.',
    element: 'Earth',
    zodiacSign: 'Taurus, Virgo, Capricorn'
  },
  {
    name: 'Knight of Pentacles',
    suit: 'Pentacles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Pents12.jpg',
    keywords: ['Hard work', 'Reliability', 'Routine', 'Methodical'],
    description: 'The most hardworking and reliable of the knights. This card encourages a methodical and diligent approach to achieving your goals.',
    reversedKeywords: ['Boredom', 'Stagnation', 'Perfectionism', 'Stubbornness'],
    reversedDescription: 'You are feeling bored or stuck in a routine. Stubbornness or perfectionism may be preventing you from making progress.',
    element: 'Earth',
    zodiacSign: 'Taurus, Virgo, Capricorn'
  },
  {
    name: 'Queen of Pentacles',
    suit: 'Pentacles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Pents13.jpg',
    keywords: ['Nurturing', 'Practical', 'Down-to-earth', 'Financial security'],
    description: 'A nurturing and practical figure who provides comfort and stability. This queen is skilled at managing the home and finances.',
    reversedKeywords: ['Financial insecurity', 'Smothering', 'Work-life imbalance', 'Self-care neglect'],
    reversedDescription: 'You may be experiencing financial insecurity or are struggling to find a healthy work-life balance. Do not neglect your own needs.',
    element: 'Earth',
    zodiacSign: 'Taurus, Virgo, Capricorn'
  },
  {
    name: 'King of Pentacles',
    suit: 'Pentacles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Pents14.jpg',
    keywords: ['Wealth', 'Success', 'Leadership', 'Security'],
    description: 'A master of the material world, this king represents financial success, stability, and abundance achieved through wisdom and hard work.',
    reversedKeywords: ['Greed', 'Materialistic', 'Stubborn', 'Poor financial decisions'],
    reversedDescription: 'A tendency to be overly materialistic or greedy. You may be making poor financial decisions or are being too stubborn.',
    element: 'Earth',
    zodiacSign: 'Taurus, Virgo, Capricorn'
  },
];


export const FULL_DECK: TarotCard[] = [...MAJOR_ARCANA, ...MINOR_ARCANA];

export const SPREADS: Spread[] = [
  {
    name: 'Card of the Day',
    cardCount: 1,
    description: 'Draw a single card to receive a focal point for your day. This reading offers a daily dose of cosmic wisdom, helping you navigate your path with intention and awareness.',
    isSpecial: true,
    positions: [
      { title: 'Today\'s Guiding Energy', prompt: 'Interpret this card as the primary energy or lesson for the day. Provide a concise, empowering, and actionable message.' },
    ],
  },
  {
    name: 'Quick Insight',
    cardCount: 1,
    description: 'When you need a swift, clear message from the universe, this single-card reading cuts to the heart of the matter, providing immediate clarity and guidance for any question.',
    positions: [
      { title: 'The Heart of the Matter', prompt: 'Provide a concise, uplifting, and inspiring interpretation for a general life reading.' },
    ],
  },
  {
    name: 'Past, Present, Future',
    cardCount: 3,
    description: 'Unveil the narrative of your journey. This timeless three-card spread illuminates the path from where you\'ve been, clarifies where you stand now, and reveals the potential future you\'re moving towards.',
    positions: [
      { title: 'The Past', prompt: 'Interpret this card as the foundation of the situation, representing past influences and lessons learned.' },
      { title: 'The Present', prompt: 'Interpret this card as the current state of the situation, the challenges and opportunities at hand.' },
      { title: 'The Future', prompt: 'Interpret this card as the potential outcome, where the current path is leading.' },
    ],
  },
  {
    name: 'Mind, Body, Spirit',
    cardCount: 3,
    description: 'Explore the sacred trinity of your being. This introspective spread provides a holistic check-in, revealing the harmony (or disharmony) between your mental, physical, and spiritual states.',
    positions: [
      { title: 'Mind', prompt: 'Interpret this card in relation to the person\'s current thoughts, beliefs, and mindset.' },
      { title: 'Body', prompt: 'Interpret this card in relation to the person\'s physical health, actions, and connection to the material world.' },
      { title: 'Spirit', prompt: 'Interpret this card in relation to the person\'s spiritual path, higher purpose, and inner self.' },
    ],
  },
  {
    name: 'Celtic Cross',
    cardCount: 10,
    description: 'Delve deep into the intricate web of any situation. The Celtic Cross is a profound ten-card reading that maps out the core of your question, its challenges, hidden influences, and the ultimate path to resolution.',
    positions: [
      { title: 'The Heart of the Matter', prompt: 'Interpret this card as the core of the situation or question. This is what is at the center of it all.' },
      { title: 'The Obstacle', prompt: 'Interpret this card as the immediate challenge or obstacle crossing the situation. It highlights the primary conflict.' },
      { title: 'The Foundation', prompt: 'Interpret this card as the subconscious influences and past events that form the foundation of the situation.' },
      { title: 'The Recent Past', prompt: 'Interpret this card as events that have just passed or are beginning to fade, which have a direct bearing on the present.' },
      { title: 'The Crown (Potential Outcome)', prompt: 'Interpret this card as the best possible outcome that can be achieved, representing conscious goals and aspirations.' },
      { title: 'The Near Future', prompt: 'Interpret this card as the next event that will unfold in the near future.' },
      { title: 'Your Attitude', prompt: 'Interpret this card as the querent\'s own feelings, attitude, and perspective on the situation.' },
      { title: 'External Influences', prompt: 'Interpret this card as the environment, the people, and external energies affecting the situation.' },
      { title: 'Hopes and Fears', prompt: 'Interpret this card as the querent\'s deepest hopes and fears related to the outcome of the situation.' },
      { title: 'The Final Outcome', prompt: 'Interpret this card as the culmination of all other factors, representing the likely final result if things continue on their current course.' },
    ],
  }
];