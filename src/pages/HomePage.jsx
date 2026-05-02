import { useState, useEffect } from 'react'
import RecipeCard from '../components/RecipeCard'
import FilterBar from '../components/FilterBar'
import './HomePage.css'

const STORES = [
  { name: 'Tesco', favicon: 'https://www.tesco.ie/favicon.ico' },
  { name: 'SuperValu', favicon: 'https://shop.supervalu.ie/favicon.ico' },
  { name: 'Lidl', favicon: 'https://www.lidl.ie/favicon.ico' },
  { name: 'Aldi', favicon: 'https://www.aldi.ie/favicon.ico' },
  { name: 'Dunnes Stores', favicon: 'https://www.dunnesstoresgrocery.com/favicon.ico' },
  { name: 'Asia Market', favicon: 'https://www.asiamarket.ie/favicon.ico' },
]

export default function HomePage() {
  const [recipes, setRecipes] = useState([])
  const [activeFilter, setActiveFilter] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}recipes/index.json`)
      .then(r => r.json())
      .then(data => { setRecipes(data); setLoading(false) })
  }, [])

  const cuisines = [...new Set(recipes.map(r => r.cuisine))]

  const filtered = recipes.filter(r => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'quick') return (r.cookingTime + r.prepTime) <= 30
    return r.cuisine === activeFilter
  })

  return (
    <>
      <header className="home-hero no-print">
        <div className="home-hero-inner">
          <h1>Cook Fresh.<br /><span>Shop Smart.</span></h1>
          <p>Discover delicious recipes and buy every ingredient directly from your favourite Irish supermarket.</p>
          <a href="#recipes" className="hero-btn">Browse Recipes</a>
          <div className="hero-tags">
            {STORES.map(s => (
              <span key={s.name} className="hero-tag">
                <img
                  src={s.favicon}
                  alt={s.name}
                  className="hero-tag-favicon"
                  onError={e => { e.target.style.display = 'none' }}
                />
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </header>
      <FilterBar cuisines={cuisines} activeFilter={activeFilter} onChange={setActiveFilter} />
      <main className="home-main" id="recipes">
        <div className="section-title">This week's recipes</div>
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
