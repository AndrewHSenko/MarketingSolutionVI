import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import logo from '../assets/ms.png'

const Header = () => {
    const headerRef = useRef(null)

    useEffect(() => {
        const el = headerRef.current
        if (!el) return
        const observer = new ResizeObserver(() => {
            document.documentElement.style.setProperty('--header-height', `${el.offsetHeight}px`)
        })
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <header ref={headerRef} className="sticky-top z-3 bg-primary">
            <nav className="navbar navbar-expand-lg w-100 py-0">
                <div className="container-fluid">
                  <div className="d-flex flex-column align-items-center justify-content-center ms-md-4">
                    <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="navbar-brand me-0 py-md-0 py-1" aria-current="page">
                          <img src={logo} alt="MSVI logo" className="img-fluid logo"/>
                      </Link>
                    <h1 className="d-none d-lg-block text-center text-nowrap text-primary-dark lead fs-lg-5">Marketing Solution VI</h1>
                  </div>
                  <button className="navbar-toggler ms-auto me-md-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse w-100 pt-1" id="navbar">
                      <div className="navbar-nav gap-1 gap-md-3 me-xl-5 me-2 gap-xl-5 ms-auto">
                          <Link to="/#stats" className="btn d-flex align-items-center justify-content-center border-1 border-dark ms-auto" aria-current="page"><h5 className="lead">CID List</h5></Link>
                          <Link to="/#cid-map" className="btn d-flex align-items-center justify-content-center border-1 border-dark ms-auto" aria-current="page"><h5 className="lead">CID Map</h5></Link>
                          <Link to="/#targeted-outreach" className="btn d-flex align-items-center justify-content-center border-1 border-dark ms-auto" aria-current="page"><h5 className="lead">Targeted Outreach</h5></Link>
                          <Link to="/#marketing-solution" className="btn d-flex align-items-center justify-content-center border-1 border-dark ms-auto" aria-current="page"><h5 className="lead">The Marketing Solution</h5></Link>
                          {/**<Link to="/about" className="btn d-flex align-items-center justify-content-center border-1 border-dark ms-auto" aria-current="page"><h5 className="lead">About Us</h5></Link>*/}
                          {/** <Link to="/myvi" className="btn d-flex align-items-center justify-content-center border-1 border-primary-dark bg-primary-dark fw-bold text-light ms-auto"><h5 className="lead">Login</h5></Link> */}
                      </div>
                  </div>
                </div>
            </nav>
        </header>
  )
}

export default Header