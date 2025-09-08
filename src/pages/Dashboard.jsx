import React, { useEffect } from 'react'
import WalletConnectButton from '../components/WalletConnectButton.jsx'
import ProtocolSelector from '../components/ProtocolSelector.jsx'
import APYChart from '../components/APYChart.jsx'
import BalanceCard from '../components/BalanceCard.jsx'
import useAppStore from '../store/useAppStore.js'
import useDeFiData from '../hooks/useDeFiData.js'
import { shortenAddress } from '../utils/format.js'

export default function Dashboard() {
  const walletAddress = useAppStore(s => s.walletAddress)
  const selectedProtocol = useAppStore(s => s.selectedProtocol)
  const setSelectedProtocol = useAppStore(s => s.setSelectedProtocol)

  const { data, loading } = useDeFiData(walletAddress, selectedProtocol)

  // Auto-reconnect on mount
  const restore = useAppStore(s => s.restoreSession)
  useEffect(() => { restore() }, [restore])

  return (
    <div className="container">
      <div className="h1">🚀 Yield Farming Dashboard</div>

      <div className="row" style={{alignItems:'center'}}>
        <div className="card" style={{display:'flex',gap:12,alignItems:'center'}}>
          <WalletConnectButton />
          <div className="muted mono">
            {walletAddress ? `Connected: ${shortenAddress(walletAddress)}` : 'Not connected'}
          </div>
        </div>

        <div className="card">
          <div className="h2">Protocol</div>
          <ProtocolSelector selected={selectedProtocol} setSelected={setSelectedProtocol} />
        </div>
      </div>

      <div className="row" style={{marginTop:16}}>
        <div className="card" style={{flex:'1 1 280px'}}>
          <div className="h2">📊 Historical APY — {selectedProtocol}</div>
          <APYChart apy={data.apy} loading={loading} />
        </div>

        <div className="card" style={{flex:'1 1 280px'}}>
          <div className="h2">💼 Balances</div>
          {loading && <div className="muted">Loading balances…</div>}
          {!loading && data.balances.length === 0 && <div className="muted">No balances to display.</div>}
          <div className="row">
            {data.balances.map((b, i) => (
              <BalanceCard key={i} token={b.token} balance={b.balance} network={b.network} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
