# Yield Farming Dashboard — Advanced

A front-end DApp that connects a wallet, lets you choose a DeFi protocol (Aave, Compound, Yearn), and shows balances + APY charts. This starter is **SDK/API ready** with clean separation of data fetching so you can plug in real services later.

## Features
- MetaMask wallet connect (auto-reconnect via localStorage)
- Protocol selector (Aave / Compound / Yearn)
- Real-time-like data layer (dummy now) with a single hook `useDeFiData`
- Historical APY chart (Recharts)
- Zustand store for global state
- Vite + React 18 for fast dev

## Quick Start
```bash
npm install
npm run dev
# open the URL printed by vite (usually http://localhost:5173)
```

## Where to plug real data
- Edit `src/utils/defiAPI.js`
- Replace `fetchBalances` and `fetchAPY` with calls to Zapper, Yearn, Aave, or Compound.
- Use `.env` based on `.env.example` for API keys/URLs.

## Notes
- This is a test project. Always handle keys securely and follow rate limits.
