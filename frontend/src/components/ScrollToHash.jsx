import { useEffect } from 'react'
import { useLocation } from 'react-router'

const ScrollToHash = () => {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const el = document.getElementById(location.hash.slice(1))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [location])

  return null
}

export default ScrollToHash
