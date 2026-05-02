import { Link } from 'react-router-dom'
import './RecipeCard.css'

export default function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.id}`} className="recipe-card">
      <div
        className="card-img"
        style={recipe.image ? {
          backgroundImage: `url(${import.meta.env.BASE_URL}${recipe.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        } : undefined}
      >
        {!recipe.image && <span className="card-emoji">🍽</span>}
      </div>
      <div className="card-body">
        <div className="card-tags">
          <span className="tag tag-cuisine">{recipe.cuisine}</span>
          <span className="tag tag-diff">{recipe.difficulty}</span>
        </div>
        <div className="card-title">{recipe.title}</div>
        <div className="card-desc">{recipe.description}</div>
        <div className="card-meta">
          <span>⏱ {recipe.cookingTime} min</span>
          <span>👤 {recipe.servings} servings</span>
        </div>
      </div>
    </Link>
  )
}
