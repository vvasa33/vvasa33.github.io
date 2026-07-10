import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import BlogPost from './pages/BlogPost';
import WorkPage from './pages/WorkPage';
import WritingPage from './pages/WritingPage';
import SenseGuardPage from './pages/SenseGuardPage';
import PageTransition from './components/motion/PageTransition';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Hero />
            </PageTransition>
          }
        />
        <Route
          path="/work"
          element={
            <PageTransition>
              <WorkPage />
            </PageTransition>
          }
        />
        <Route
          path="/writing"
          element={
            <PageTransition>
              <WritingPage />
            </PageTransition>
          }
        />
        <Route
          path="/senseguard"
          element={
            <PageTransition>
              <SenseGuardPage />
            </PageTransition>
          }
        />
        <Route path="/blogs" element={<Navigate to="/writing" replace />} />
        <Route
          path="/blog/:slug"
          element={
            <PageTransition>
              <BlogPost />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
