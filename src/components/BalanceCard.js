import React from "react";

export default function BalanceCard({ balances }) {
  return (
    <div className="bg-gray-800 p-4 rounded-2xl shadow-md mb-4">
      <h2 className="text-lg font-semibold mb-2">💰 Balances</h2>
      {balances.length === 0 ? (
        <p>No balances found.</p>
      ) : (
        <ul>
          {balances.map((b, idx) => (
            <li key={idx}>
              {b.token}: {b.balance}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}