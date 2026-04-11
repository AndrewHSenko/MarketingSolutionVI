import { Outlet } from 'react-router'
import { HeaderHeightProvider } from './HeaderHeightContext.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

const MainLayout = ({ children }) => {
  return (
    <HeaderHeightProvider>
      <div className="container-fluid d-flex flex-column p-0 min-vh-100 bg-lightbg">
        <Header />
        <main className="flex-grow-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </HeaderHeightProvider>
  )
}

export default MainLayout