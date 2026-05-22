import { Route, Routes } from 'react-router'
import routes from './routes.jsx'
import MainLayout from './layouts/MainLayout'
import LandingPage from './pages/LandingPage'

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />}/>
          {routes.map((route, index) => (
            <Route 
              key={index}
              path={route.path}
              element={route.element}
              index={route.index}
            />
            ))}
        </Route>
      </Routes>
  )
}

export default App 

// <Route path="items" element={<ItemsPage />} />