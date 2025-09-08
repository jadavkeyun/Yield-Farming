import React from "react";
import { WalletProvider } from "./context/WalletContext";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <WalletProvider>
      <Dashboard />
    </WalletProvider>
  );
}