import { Routes, Route, Navigate } from 'react-router-dom'
import Hero from './components/Hero'
import BlogPost from './pages/BlogPost'
import WorkPage from './pages/WorkPage'
import WritingPage from './pages/WritingPage'
import SenseGuardPage from './pages/SenseGuardPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/writing" element={<WritingPage />} />
      <Route path="/senseguard" element={<SenseGuardPage />} />
      <Route path="/blogs" element={<Navigate to="/writing" replace />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  )
}

export default App
