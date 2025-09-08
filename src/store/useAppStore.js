import { create } from 'zustand'

const useAppStore = create((set) => ({
  walletAddress: null,
  selectedProtocol: 'Aave',
  setWalletAddress: (addr) => set({ walletAddress: addr }),
  clearWallet: () => set({ walletAddress: null }),
  setSelectedProtocol: (p) => set({ selectedProtocol: p }),
  restoreSession: () => {
    const last = localStorage.getItem('yfd:lastWallet')
    if (last) set({ walletAddress: last })
  }
}))

export default useAppStore
