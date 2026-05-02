import { Link } from 'react-router-dom'
import './RecipeCard.css'

export default function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.id}`} className="recipe-card">
      <div
        className="recipe-card-image"
        style={recipe.image ? { backgroundImage: `url(${import.meta.env.BASE_URL}${recipe.image})` } : undefined}
      >
        <span className="cuisine-badge">{recipe.cuisine}</span>
      </div>
      <div className="recipe-card-body">
        <h3 className="recipe-card-title">{recipe.title}</h3>
        <p className="recipe-card-desc">{recipe.description}</p>
        <div className="recipe-card-meta">
          <span className="meta-time">{recipe.cookingTime} min</span>
          <span className={`difficulty-badge difficulty-${recipe.difficulty.toLowerCase()}`}>
            {recipe.difficulty}
          </span>
        </div>
      </div>
    </Link>
  )
}
