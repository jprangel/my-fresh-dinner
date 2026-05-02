import { Link } from 'react-router-dom'
import './AboutPage.css'

const STATS = [
  { unit: 'for', num: '2', label: 'people per recipe' },
  { unit: 'max', num: '45', label: 'minutes to cook' },
  { unit: 'up to', num: '1200', label: 'kcal per serving' },
  { unit: 'max', num: '2', label: 'shops per meal' },
]

const NUTRITION = [
  { icon: '🥩', title: 'Lean protein', desc: 'Chicken, fish, turkey, tofu — every meal is anchored by a quality protein source.' },
  { icon: '🌾', title: 'Complex carbs', desc: 'Brown rice, quinoa, lentils — slow-release energy with no refined carb spikes.' },
  { icon: '🥦', title: 'High fibre veg', desc: 'Plenty of vegetables in every dish to keep you full and your gut happy.' },
  { icon: '🫒', title: 'Healthy fats', desc: 'Olive oil, avocado, nuts and seeds — nothing ultra-processed, ever.' },
]

const GOALS = [
  { icon: '🔥', label: 'Fat loss' },
  { icon: '💪', label: 'Muscle gain' },
  { icon: '🥚', label: 'High protein' },
  { icon: '⚡', label: 'Quick meal' },
]

const CUISINES = [
  { icon: '🍜', label: 'Asian' },
  { icon: '🫕', label: 'Mediterranean' },
  { icon: '🥘', label: 'European' },
  { icon: '🌮', label: 'Mexican' },
  { icon: '🍛', label: 'Middle Eastern' },
]

const HOW_IT_WORKS = [
  { num: 1, title: 'Browse recipes', desc: 'Filter by cuisine, cook time, or goal — find something that excites you.' },
  { num: 2, title: 'Check nutrition', desc: 'Every recipe shows calories, protein, carbs and fat per serving upfront.' },
  { num: 3, title: 'Shop the ingredients', desc: 'Click any ingredient to buy it directly from your preferred Irish supermarket.' },
  { num: 4, title: 'Cook in 45 min', desc: 'Follow the step-by-step recipe and enjoy a fresh, home-cooked dinner.' },
]

const SHOPS = [
  { name: 'Tesco Ireland', url: 'tesco.ie', favicon: 'https://www.tesco.ie/favicon.ico', badge: 'Most recipes' },
  { name: 'SuperValu', url: 'shop.supervalu.ie', favicon: 'https://shop.supervalu.ie/favicon.ico' },
  { name: 'Lidl Ireland', url: 'lidl.ie', favicon: 'https://www.lidl.ie/favicon.ico' },
  { name: 'Aldi Ireland', url: 'aldi.ie', favicon: 'https://www.aldi.ie/favicon.ico' },
  { name: 'Asia Market', url: 'asiamarket.ie', favicon: 'https://www.asiamarket.ie/favicon.ico', badge: 'Asian recipes' },
  { name: 'Dunnes Stores', url: 'dunnesstoresgrocery.com', favicon: 'https://www.dunnesstoresgrocery.com/favicon.ico' },
]

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-hero-icon">🥦</div>
        <h1>Real food.<br /><span>Real ingredients. Ireland.</span></h1>
        <p>My Fresh Dinner is a meal planning app for two — with balanced recipes ready in 45 minutes or less, and every ingredient linked directly to an Irish supermarket.</p>
      </div>

      <div className="about-content">

        <div className="story-card">
          <h2>Our story</h2>
          <p>My Fresh Dinner was born out of a simple frustration: meal kit services like HelloFresh are great, but they're expensive, come with too much packaging, and lock you into a subscription.</p>
          <p>We wanted the same experience — beautiful recipes, clear ingredient lists, stress-free shopping — but with the freedom to buy exactly what you need, from the shops you already use every week in Ireland.</p>
          <p>Every recipe is designed for two people, ready in under 45 minutes, built around whole ingredients, and linked directly to Tesco, SuperValu, Lidl, Aldi, or Asia Market. No subscriptions, no waste, no fuss.</p>
        </div>

        <div className="section-title">By the numbers</div>
        <div className="stats-grid">
          {STATS.map(s => (
            <div key={s.label} className="stat-card">
              <div className="stat-unit">{s.unit}</div>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="section-title">How we build each recipe</div>
        <div className="nutrition-grid">
          {NUTRITION.map(n => (
            <div key={n.title} className="nutrition-card">
              <div className="nutrition-icon">{n.icon}</div>
              <h3>{n.title}</h3>
              <p>{n.desc}</p>
            </div>
          ))}
        </div>

        <div className="section-title">Recipe goals</div>
        <div className="goals-wrap">
          {GOALS.map(g => (
            <div key={g.label} className="goal-tag">
              <span>{g.icon}</span>{g.label}
            </div>
          ))}
        </div>

        <div className="section-title">Cuisines we love</div>
        <div className="cuisine-grid">
          {CUISINES.map(c => (
            <div key={c.label} className="cuisine-card">
              <div className="cuisine-icon">{c.icon}</div>
              <p>{c.label}</p>
            </div>
          ))}
        </div>

        <div className="section-title">How it works</div>
        <div className="steps-grid">
          {HOW_IT_WORKS.map(s => (
            <div key={s.num} className="step-card">
              <div className="step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="section-title">Where we shop</div>
        <div className="shops-grid">
          {SHOPS.map(s => (
            <div key={s.name} className="shop-card">
              <img
                src={s.favicon}
                alt={s.name}
                onError={e => { e.target.style.display = 'none' }}
              />
              <div className="shop-name">{s.name}</div>
              <div className="shop-url">{s.url}</div>
              {s.badge && <div className="shop-badge">{s.badge}</div>}
            </div>
          ))}
        </div>

        <div className="about-cta">
          <h2>Ready to cook something delicious?</h2>
          <p>Browse this week's recipes — balanced, fresh, and shoppable at your nearest Irish supermarket.</p>
          <Link to="/" className="cta-btn">Browse recipes</Link>
        </div>

      </div>

      <footer className="about-footer">
        Made with love in Ireland &nbsp;·&nbsp; <span>My Fresh Dinner</span> &nbsp;·&nbsp; No subscriptions, just good food
      </footer>
    </div>
  )
}
