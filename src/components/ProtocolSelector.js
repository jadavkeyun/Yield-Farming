import React from "react";

export default function ProtocolSelector({ selected, setSelected }) {
  const protocols = ["Aave", "Compound", "Yearn"];

  return (
    <select
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      className="p-2 rounded bg-gray-700 text-white"
    >
      {protocols.map((protocol) => (
        <option key={protocol} value={protocol}>
          {protocol}
        </option>
      ))}
    </select>
  );
}