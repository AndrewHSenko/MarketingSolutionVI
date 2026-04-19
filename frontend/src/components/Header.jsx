import { Link } from 'react-router'
import logo from '../assets/ms.png'

const Header = () => {
    return (
        <header className="sticky-top z-2 bg-primary">
            <nav className="navbar navbar-expand-lg w-100 py-0">
                <div className="container-fluid mx-4">
                  <div className="d-flex flex-column align-items-center justify-content-center ms-md-4">
                    <Link to="/" className="navbar-brand me-0 py-md-0 py-1" aria-current="page">
                          <img src={logo} alt="MSVI logo" className="img-fluid logo"/>
                      </Link>
                    <h1 className="d-none d-lg-block text-center text-nowrap text-primary-dark lead fs-lg-5">Marketing Solution VI</h1>
                  </div>
                  <button className="navbar-toggler ms-auto me-md-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse w-100 pt-1" id="navbar">
                      <div className="navbar-nav gap-2 me-lg-5 gap-lg-5 ms-auto">
                          <Link to="/" className="btn border-1 border-dark ms-auto" aria-current="page"><h5 className="lead">Main Menu</h5></Link>
                          <Link to="checkout" className="btn border-1 border-dark ms-auto"><h5 className="lead">Checkout</h5></Link>
                      </div>
                  </div>
                </div>
            </nav>
        </header>
  )
}

export default Header