import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import PopupPage from './PopupPage'

const AppRouter: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/popup" element={<PopupPage />} />
        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </div>
  )
}

export default AppRouter