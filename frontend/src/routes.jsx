import LandingPage from './pages/LandingPage.jsx'
import AboutUs from './pages/AboutUs.jsx'
import NotFound from './pages/NotFound.jsx'

const routes = [
    {
        path: '/',
        index: true,
        element: <LandingPage />
    },
    {
        path: 'about',
        element: <AboutUs />
    },
    {
        path: 'events',
        element: <NotFound /> // Will host the event planning/coordination pages
    },
    {
        path: 'myvi',
        element: <NotFound /> // Will host the user account management pages
    },
    {
        path: '*',
        element: <NotFound />
    }
]

export default routes