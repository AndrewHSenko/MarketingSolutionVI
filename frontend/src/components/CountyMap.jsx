import counties from '../assets/counties.png'
import MapTable from '../components/MapTable.jsx'

const CountyMap = () => {
  return (
    <div className="container-fluid my-3">
        <div className="row align-items-center">
            <div className="col-12 col-md-7 d-flex justify-content-center">
                <img src={counties} className="map"/>
            </div>
            <div className="col-12 col-md-5 d-flex justify-content-center pe-5">
                <MapTable />
            </div>
        </div>
    </div>
  )
}

export default CountyMap