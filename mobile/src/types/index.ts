export type CharacterClass = 'Warrior' | 'Mage' | 'Assassin' | 'Archer' | 'Monk' | 'Paladin' | 'Necromancer';
export type QuestDifficulty = 'Easy' | 'Medium' | 'Hard' | 'Legendary';
export type PetRarity = 'Common' | 'Rare' | 'Epic' | 'Mythic';
export type Rank = 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond' | 'Master' | 'Legend';

export interface User {
  id: string;
  email: string;
  displayName: string;
  createdAt: Date;
}

export interface Character {
  id: string;
  userId: string;
  class: CharacterClass;
  level: number;
  currentXP: number;
  totalXP: number;
  title: string;
}

export interface Quest {
  id: string;
  userId: string;
  title: string;
  difficulty: QuestDifficulty;
  xpReward: number;
  isCompleted: boolean;
}

export interface Pet {
  id: string;
  userId: string;
  name: string;
  rarity: PetRarity;
  level: number;
}

export interface Stats {
  discipline: number;
  strength: number;
  focus: number;
  wisdom: number;
  creativity: number;
  endurance: number;
  charisma: number;
}