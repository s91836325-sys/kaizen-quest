# API Documentation

## Base URL
```
http://localhost:5000 (dev)
https://api.kaizenquest.com (prod)
```

## Auth Endpoints
- `POST /api/auth/register` - Register
- `POST /api/auth/login` - Login
- `POST /api/auth/google` - Google Sign-In
- `POST /api/auth/apple` - Apple Sign-In

## Character Endpoints
- `GET /api/characters/:userId` - Get character
- `POST /api/characters` - Create character

## Quest Endpoints
- `GET /api/quests/:userId` - Get quests
- `POST /api/quests` - Create quest
- `PUT /api/quests/:questId/complete` - Complete quest

## PvP Endpoints
- `POST /api/pvp/match` - Start match
- `GET /api/leaderboard` - Get leaderboard