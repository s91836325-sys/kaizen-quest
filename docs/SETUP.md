# Kaizen Quest Setup Guide

## Prerequisites
- Node.js 18+
- Firebase account
- Expo CLI: `npm install -g expo-cli`

## Installation

```bash
git clone https://github.com/s91836325-sys/kaizen-quest.git
cd kaizen-quest
npm install
```

## Environment Variables

Copy `.env.example` to `.env` and add your Firebase credentials.

## Development

```bash
# Backend
cd backend && npm run dev

# Mobile (separate terminal)
cd mobile && npm start
```

## Firebase Setup

1. Create project at firebase.google.com
2. Enable Authentication (Google, Apple, Email)
3. Create Firestore Database
4. Get service account key
5. Add to backend/.env

See [ARCHITECTURE.md](ARCHITECTURE.md) for details.