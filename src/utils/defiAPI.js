// Central place to integrate real DeFi data sources.
// Currently returns mock data so the app runs out of the box.

const delay = (ms) => new Promise(r => setTimeout(r, ms))

export async function fetchBalances(wallet, protocol) {
  // TODO: Replace with real calls:
  // - Zapper: https://docs.zapper.xyz
  // - Yearn yDaemon: process.env.VITE_YEARN_API_URL
  // - Aave: https://docs.aave.com/developers
  // - Compound: https://compound.finance/docs
  await delay(400)
  return [
    { token: 'DAI', balance: '120.50', network: 'Ethereum' },
    { token: 'USDC', balance: '300.00', network: 'Ethereum' },
    { token: 'USDT', balance: '42.10', network: 'Ethereum' }
  ]
}

export async function fetchAPY(protocol) {
  await delay(300)
  // Return last 6 months synthetic APY data
  const base = protocol === 'Yearn' ? 7.1 : protocol === 'Aave' ? 5.6 : 4.8
  const months = ['Apr','May','Jun','Jul','Aug','Sep']
  return months.map((m, i) => ({
    label: m,
    value: Number((base + Math.sin(i) + (i*0.2)).toFixed(2))
  }))
}
