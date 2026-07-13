import { Outlet } from 'react-router'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ScrollToHash from '../components/ScrollToHash.jsx'

const MainLayout = ({ children }) => {
  return (
    <div className="container-fluid d-flex flex-column p-0 min-vh-100">
    <Header />
    <ScrollToHash />
    <main className="flex-grow-1">
        <Outlet />
    </main>
    <Footer />
    </div>
  )
}

export default MainLayout