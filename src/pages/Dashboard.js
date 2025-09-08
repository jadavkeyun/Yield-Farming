import React, { useState } from "react";
import useWallet from "../hooks/useWallet";
import useDeFiData from "../hooks/useDeFiData";
import WalletConnectButton from "../components/WalletConnectButton";
import ProtocolSelector from "../components/ProtocolSelector";
import BalanceCard from "../components/BalanceCard";
import APYChart from "../components/APYChart";

export default function Dashboard() {
  const { walletAddress, connectWallet } = useWallet();
  const [protocol, setProtocol] = useState("Aave");
  const { data, loading } = useDeFiData(walletAddress, protocol);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">🚀 Yield Farming Dashboard</h1>

      {!walletAddress ? (
        <WalletConnectButton connectWallet={connectWallet} />
      ) : (
        <p className="mb-6">✅ Connected: {walletAddress}</p>
      )}

      <div className="mb-4">
        <ProtocolSelector selected={protocol} setSelected={setProtocol} />
      </div>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <>
          <BalanceCard balances={data.balances} />
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-2xl">
            <h2 className="text-xl font-semibold mb-4">📈 Historical APY ({protocol})</h2>
            <APYChart apy={data.apy} />
          </div>
        </>
      )}
    </div>
  );
}