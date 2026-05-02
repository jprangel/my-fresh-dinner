import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './RecipePage.css'

const STORE_CLASS = {
  'Tesco Ireland': 'tesco',
  'SuperValu Ireland': 'supervalu',
  'Lidl Ireland': 'lidl',
  'Aldi Ireland': 'aldi',
  'Asia Market Ireland': 'asia',
}

export default function RecipePage() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}recipes/${id}.json`)
      .then(r => { if (!r.ok) throw new Error(); return r.json() })
      .then(setRecipe)
      .catch(() => setError(true))
  }, [id])

  if (error) return (
    <div className="recipe-state">
      <p>Recipe not found.</p>
      <Link to="/">Back to recipes</Link>
    </div>
  )

  if (!recipe) return <div className="recipe-state">Loading...</div>

  return (
    <div className="recipe-page">
      <div className="recipe-page-inner">
        <Link to="/" className="back-link no-print">← Back to recipes</Link>

        <div className="recipe-hero">
          <div
            className="recipe-hero-image"
            style={recipe.image ? {
              backgroundImage: `url(${import.meta.env.BASE_URL}${recipe.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            } : undefined}
          >
            {!recipe.image && <span>🍽</span>}
          </div>
          <div className="recipe-hero-info">
            <div className="recipe-tags">
              {recipe.tags.map(t => (
                <span key={t} className="recipe-tag">{t}</span>
              ))}
            </div>
            <h1>{recipe.title}</h1>
            <p className="recipe-description">{recipe.description}</p>
            <div className="recipe-meta-grid">
              <div className="meta-block">
                <span className="meta-block-value">{recipe.prepTime} min</span>
                <span className="meta-block-label">Prep</span>
              </div>
              <div className="meta-block">
                <span className="meta-block-value">{recipe.cookingTime} min</span>
                <span className="meta-block-label">Cook</span>
              </div>
              <div className="meta-block">
                <span className="meta-block-value">{recipe.difficulty}</span>
                <span className="meta-block-label">Difficulty</span>
              </div>
              <div className="meta-block">
                <span className="meta-block-value">{recipe.servings}</span>
                <span className="meta-block-label">Servings</span>
              </div>
            </div>
          </div>
        </div>

        <div className="recipe-body">
          <aside className="recipe-sidebar">
            <section className="recipe-section">
              <h2>Ingredients</h2>
              <ul className="ingredients-list">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} className="ingredient-item">
                    <span className="ing-quantity">{ing.quantity}</span>
                    <span className="ing-name">{ing.name}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="recipe-section">
              <h2>Nutrition <span className="section-note">per serving</span></h2>
              <div className="nutrition-grid">
                <div className="nutrition-block">
                  <span className="nutrition-value">{recipe.nutrition.calories}</span>
                  <span className="nutrition-label">kcal</span>
                </div>
                <div className="nutrition-block">
                  <span className="nutrition-value">{recipe.nutrition.protein}</span>
                  <span className="nutrition-label">Protein</span>
                </div>
                <div className="nutrition-block">
                  <span className="nutrition-value">{recipe.nutrition.carbs}</span>
                  <span className="nutrition-label">Carbs</span>
                </div>
                <div className="nutrition-block">
                  <span className="nutrition-value">{recipe.nutrition.fat}</span>
                  <span className="nutrition-label">Fat</span>
                </div>
              </div>
            </section>

            <section className="recipe-section no-print">
              <h2>Shopping List</h2>
              <ul className="shopping-list">
                {recipe.shoppingList.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`shopping-link ${STORE_CLASS[item.store] || ''}`}
                    >
                      <span className="shopping-name">{item.name}</span>
                      <span className="shopping-store-label">{item.store} →</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section className="recipe-section print-only">
              <h2>Shopping List</h2>
              <ul className="shopping-list-print">
                {recipe.shoppingList.map((item, i) => (
                  <li key={i}>{item.name}</li>
                ))}
              </ul>
            </section>
          </aside>

          <main className="recipe-main">
            <section className="recipe-section">
              <h2>Instructions</h2>
              <ol className="steps-list">
                {recipe.steps.map(s => (
                  <li key={s.step} className="step-item">
                    <span className="step-number">{s.step}</span>
                    <span className="step-text">{s.instruction}</span>
                  </li>
                ))}
              </ol>
            </section>
          </main>
        </div>

        <div className="recipe-actions no-print">
          <button className="print-btn" onClick={() => window.print()}>
            Print Recipe
          </button>
        </div>
      </div>
    </div>
  )
}
