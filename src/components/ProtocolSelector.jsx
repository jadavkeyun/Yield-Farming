import React from 'react'

export default function ProtocolSelector({ selected, setSelected }) {
  const protocols = ['Aave','Compound','Yearn']
  return (
    <select className="select" value={selected} onChange={(e)=>setSelected(e.target.value)}>
      {protocols.map(p => <option key={p} value={p}>{p}</option>)}
    </select>
  )
}
