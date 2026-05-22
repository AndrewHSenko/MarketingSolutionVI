import { Link } from 'react-router'
import tinyhome from '../assets/tinyhome.png'

const NotFound = () => {
  return (
    <div className="p-3 display-3 text-center d-flex flex-column align-items-center">
        <h1 className="lead fs-1 my-4 fst-italic">Page not found...</h1>
      <img src={tinyhome} className="img-fluid" style={{width: "8em", height: "7em"}}/>
      <Link to="/" className="btn border-1 border-dark"><h5 className="lead">Return to home</h5></Link>
    </div>
  )
}

export default NotFound