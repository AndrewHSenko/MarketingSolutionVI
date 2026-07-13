import { Link } from 'react-router'

import msvi_logo from '../assets/msiv_logo.png'

const Footer = () => {
  return (
    <div className="container-fluid bg-primary-dark py-lg-5 px-lg-5">
      <div className="row d-flex justify-content-between g-3 py-3 py-lg-0 text-light">
        <div className="col-12 col-md-4 ">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="">
            <img src={msvi_logo} alt="Eatery logo" className="img-fluid px-4"/>
          </Link>
        </div>
        <div className="col-12 col-md-4 text-center">
          <h5 className="fw-bold">Contact Us</h5>
          <div className="my-4 d-flex flex-column align-items-center gap-3">
            <p><a href="mailto:viger@marketingsolutionvi.com" className="text-light text-decoration-none">viger@marketingsolutionvi.com</a></p>
            <p>Info: <a href="mailto:info@marketingsolutionvi.com" className="text-light text-decoration-none">info@marketingsolutionvi.com</a></p>
            <p>Support: <a href="mailto:info@marketingsolutionvi.com" className="text-light text-decoration-none">info@marketingsolutionvi.com</a></p>
            <p>Phone: (949) 555-6784</p>
          </div>
        </div>
        <div className="col-12 col-md-4 text-center">
          <h5 className="fw-bold">Legal</h5>
          <div className="my-4 d-flex flex-column align-items-center gap-3">
            <p><Link to="/privacy-policy" className="text-light text-decoration-none">Privacy Policy</Link></p>
            <p><Link to="/terms-of-service" className="text-light text-decoration-none">Terms of Service</Link></p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer