import React from "react";

export default function WalletConnectButton({ connectWallet }) {
  return (
    <button
      onClick={connectWallet}
      className="px-6 py-3 bg-blue-600 rounded-2xl shadow-lg hover:bg-blue-500 transition"
    >
      Connect Wallet
    </button>
  );
}