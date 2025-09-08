import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function APYChart({ apy }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={apy}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis dataKey="month" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Tooltip />
        <Line type="monotone" dataKey="apy" stroke="#4ade80" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
}