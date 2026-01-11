import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import BlogPost from './pages/BlogPost'
import BlogsPage from './pages/BlogsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  )
}

export default App
