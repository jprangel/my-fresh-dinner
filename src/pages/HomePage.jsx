import { useState, useEffect } from 'react'
import RecipeCard from '../components/RecipeCard'
import FilterBar from '../components/FilterBar'
import './HomePage.css'

function matchesTime(cookingTime, range) {
  if (range === 'all') return true
  if (range === 'under20') return cookingTime < 20
  if (range === '20to40') return cookingTime >= 20 && cookingTime <= 40
  if (range === 'over40') return cookingTime > 40
  return true
}

export default function HomePage() {
  const [recipes, setRecipes] = useState([])
  const [filters, setFilters] = useState({ cuisine: 'all', time: 'all' })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}recipes/index.json`)
      .then(r => r.json())
      .then(data => {
        setRecipes(data)
        setLoading(false)
      })
  }, [])

  const cuisines = [...new Set(recipes.map(r => r.cuisine))]

  const filtered = recipes.filter(r => {
    if (filters.cuisine !== 'all' && r.cuisine !== filters.cuisine) return false
    if (!matchesTime(r.cookingTime, filters.time)) return false
    return true
  })

  return (
    <>
      <header className="home-hero no-print">
        <div className="home-hero-inner">
          <h1>Fresh Recipes for Every Night</h1>
          <p>Simple, healthy meals you'll love to cook.</p>
        </div>
      </header>
      <FilterBar cuisines={cuisines} filters={filters} onChange={setFilters} />
      <main className="home-main">
        {loading ? (
          <p className="state-text">Loading recipes...</p>
        ) : filtered.length === 0 ? (
          <p className="state-text">No recipes match your filters.</p>
        ) : (
          <div className="recipe-grid">
            {filtered.map(r => <RecipeCard key={r.id} recipe={r} />)}
          </div>
        )}
      </main>
    </>
  )
}
