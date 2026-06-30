# Architecture

## Tech Stack
- **Frontend**: React Native + Expo (iOS, Android, Web)
- **Backend**: Node.js + Express + TypeScript
- **Database**: Firebase Firestore
- **Auth**: Firebase Auth + JWT
- **Real-time**: Firebase Realtime Database
- **Storage**: Firebase Cloud Storage

## Project Structure
```
├── mobile/          # React Native app
├── backend/         # Node.js API server
├── database/        # Firestore schema
└── docs/           # Documentation
```

## Data Flow
User Action → Mobile App → REST API → Firebase → Real-time Sync → UI Update

## Authentication
Firebase → ID Token → Backend JWT → Session