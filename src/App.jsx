import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import RecipePage from './pages/RecipePage'
import AboutPage from './pages/AboutPage'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  )
}
