import './FilterBar.css'

const TIME_RANGES = [
  { label: 'All times', value: 'all' },
  { label: 'Under 20 min', value: 'under20' },
  { label: '20–40 min', value: '20to40' },
  { label: 'Over 40 min', value: 'over40' },
]

export default function FilterBar({ cuisines, filters, onChange }) {
  return (
    <div className="filter-bar no-print">
      <div className="filter-bar-inner">
        <span className="filter-label">Filter</span>
        <div className="filter-group">
          <label htmlFor="cuisine-filter">Cuisine</label>
          <select
            id="cuisine-filter"
            value={filters.cuisine}
            onChange={e => onChange({ ...filters, cuisine: e.target.value })}
          >
            <option value="all">All cuisines</option>
            {cuisines.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="time-filter">Cooking Time</label>
          <select
            id="time-filter"
            value={filters.time}
            onChange={e => onChange({ ...filters, time: e.target.value })}
          >
            {TIME_RANGES.map(r => (
              <option key={r.value} value={r.value}>{r.label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
