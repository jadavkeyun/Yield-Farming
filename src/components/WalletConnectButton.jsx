import React from 'react'
import useAppStore from '../store/useAppStore.js'
import { ethers } from 'ethers'

export default function WalletConnectButton() {
  const walletAddress = useAppStore(s => s.walletAddress)
  const setWalletAddress = useAppStore(s => s.setWalletAddress)
  const clearWallet = useAppStore(s => s.clearWallet)

  const connect = async () => {
    if (!window.ethereum) {
      alert('MetaMask not detected')
      return
    }
    try {
      const provider = new ethers.BrowserProvider(window.ethereum)
      const accounts = await provider.send('eth_requestAccounts', [])
      const addr = accounts[0]
      setWalletAddress(addr)
      localStorage.setItem('yfd:lastWallet', addr)
    } catch (e) {
      console.error(e)
    }
  }

  const disconnect = () => {
    clearWallet()
    localStorage.removeItem('yfd:lastWallet')
  }

  if (walletAddress) {
    return <button className="button" onClick={disconnect}>Disconnect</button>
  }
  return <button className="button" onClick={connect}>Connect Wallet</button>
}
