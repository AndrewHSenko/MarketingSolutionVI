import Sample from '../components/Sample.jsx'
import MapSample from '../components/MapSample.jsx'

const Samples = () => {
  return (
    <div className="container-fluid">
        <div className="row d-flex align-items-center justify-content-center">
            <div className="col-12 col-lg-6">
                <Sample />
            </div>
            <div className="col-12 col-lg-6">
                <MapSample />
            </div>
        </div>
        
    </div>
  )
}

export default Samples