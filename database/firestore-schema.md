# Firestore Database Schema

## Collections

### users
- id, email, displayName, avatar, createdAt, lastLogin

### characters
- id, userId, class, level, currentXP, totalXP, stats, title, createdAt

### quests
- id, userId, title, difficulty, xpReward, isCompleted, completedAt

### quest_completions
- id, questId, userId, xpEarned, completedAt

### pets
- id, userId, name, rarity, level, experience, isEvolved

### bosses
- id, type, weekNumber, totalHealth, currentHealth

### boss_defeats
- id, bossId, userId, damageContribution, xpEarned

### guilds
- id, name, leaderId, members, totalXP, createdAt

### pvp_matches
- id, player1Id, player2Id, battleType, winner, createdAt

### leaderboards
- id, userId, rank, type, value, lastUpdated