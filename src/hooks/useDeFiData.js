import { useEffect, useState } from 'react'
import { fetchBalances, fetchAPY } from '../utils/defiAPI.js'

export default function useDeFiData(wallet, protocol) {
  const [data, setData] = useState({ balances: [], apy: [] })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!wallet) { setData({balances:[], apy:[]}); return }
    setLoading(true)
    Promise.all([
      fetchBalances(wallet, protocol),
      fetchAPY(protocol)
    ]).then(([balances, apy]) => {
      setData({ balances, apy })
    }).finally(() => setLoading(false))
  }, [wallet, protocol])

  return { data, loading }
}
