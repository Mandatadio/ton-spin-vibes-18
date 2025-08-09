import { CONTRACT_ADDRESS } from './ContractAddressBar'

const MarqueeTicker = () => {
  const items = new Array(12).fill(null)
  return (
    <aside className="marquee mt-4" aria-label="Contract address ticker">
      <div className="marquee-inner">
        {items.map((_, i) => (
          <div key={i} className="marquee-item">
            🦝 CA: {CONTRACT_ADDRESS} • 🚀 PEDRO • COMMUNITY VIBES •
          </div>
        ))}
      </div>
    </aside>
  )
}

export default MarqueeTicker
