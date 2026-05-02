import './FilterBar.css'

export default function FilterBar({ cuisines, activeFilter, onChange }) {
  const filters = [
    { label: 'All', value: 'all' },
    ...cuisines.map(c => ({ label: c, value: c })),
    { label: 'Under 30 min', value: 'quick' },
  ]

  return (
    <div className="filter-bar no-print">
      <div className="filter-bar-inner">
        {filters.map(f => (
          <button
            key={f.value}
            className={`filter-btn${activeFilter === f.value ? ' active' : ''}`}
            onClick={() => onChange(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>
    </div>
  )
}
