import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import JumpyRunPage from './pages/JumpyRunPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/jumpyrun" element={<JumpyRunPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
