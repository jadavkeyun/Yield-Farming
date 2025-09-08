import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function APYChart({ apy = [], loading }) {
  return (
    <div style={{width:'100%', height:320}}>
      <ResponsiveContainer>
        <LineChart data={apy}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
      {loading && <div className="muted">Loading chart…</div>}
    </div>
  )
}
