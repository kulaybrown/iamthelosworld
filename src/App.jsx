import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import JumpyRunPage from './pages/JumpyRunPage'
import StreetBusterPage from './pages/StreetBusterPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/jumpy-run" element={<JumpyRunPage />} />
      <Route path="/street-buster" element={<StreetBusterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
