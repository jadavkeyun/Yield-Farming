import React from 'react'

export default function BalanceCard({ token, balance, network }) {
  return (
    <div className="card" style={{minWidth:180, flex:'1 1 160px'}}>
      <div className="h2">{token}</div>
      <div className="mono" style={{fontSize:20}}>{balance}</div>
      <div className="muted" style={{marginTop:6}}>{network || 'Ethereum'}</div>
    </div>
  )
}
