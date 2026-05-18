import { Link } from 'react-router'
import ttinyhome from '../assets/ttinyhome.png'

const NotFound = () => {
  return (
    <div className="p-3 display-3 text-center d-flex flex-column align-items-center">
      <img src={ttinyhome} className="img-fluid border border-1 border-primary-dark rounded-3" style={{width: "10em", height: "9em"}}/>
      <Link to="/" className="btn border-1 border-dark my-3"><h5 className="lead">Return to home</h5></Link>
    </div>
  )
}

export default NotFound