import { Link } from 'react-router'

import msvi_logo from '../assets/msiv_logo.png'

const Footer = () => {
  return (
    <div className="container-fluid bg-primary-dark py-lg-5 px-lg-5">
      <div className="row d-flex justify-content-between g-3 py-3 py-lg-0 text-light">
        <div className="col-12 col-md-4 ">
          <Link className="">
            <img src={msvi_logo} alt="Eatery logo" className="img-fluid px-4"/>
          </Link>
        </div>
        <div className="col-12 col-md-4 text-center">
          <p>Something</p>
        </div>
        <div className="col-12 col-md-4 text-center">
          <p>Something else</p>
        </div>
      </div>
    </div>
  )
}

export default Footer