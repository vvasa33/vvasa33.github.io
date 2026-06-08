import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'

const BlogsPage = lazy(() => import('./pages/BlogsPage'))
const BlogPost = lazy(() => import('./pages/BlogPost'))

function PageLoader() {
  return (
    <div className="min-h-screen bg-paper flex items-center justify-center font-['IBM_Plex_Mono'] text-sm uppercase tracking-widest text-black">
      Loading...
    </div>
  )
}

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Suspense>
  )
}

export default App
