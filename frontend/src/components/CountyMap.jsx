import counties from '../assets/counties.png'
import CountyDropdown from './CountyDropdown.jsx'

const CountyMap = () => {
  return (
    <div className="container-fluid my-3 pt-3 pt-md-5">
        <div className="row ">
            <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
                <img src={counties} className="map"/>
            </div>
            <div className="col-12 col-md-8">
                <CountyDropdown />
            </div>
        </div>
    </div>
  )
}

export default CountyMap