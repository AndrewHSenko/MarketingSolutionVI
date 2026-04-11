import { Route, Routes } from 'react-router'

import MainLayout from './layouts/MainLayout'
import LandingPage from './pages/LandingPage'

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />}/>
        </Route>
      </Routes>
  )
}

export default App 

// <Route path="items" element={<ItemsPage />} />