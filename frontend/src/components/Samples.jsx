import { useState } from 'react'
import Sample from '../components/Sample.jsx'
import MapSample from '../components/MapSample.jsx'

const Samples = () => {
    const [active, setActive] = useState(null);

    return (
        <div className="container-fluid my-4">
            <div className="row d-flex justify-content-center mb-3">
                <div
                    className="col-12 col-lg-6 align-items-center px-0"
                    onMouseEnter={() => setActive("sample")}
                    onMouseLeave={() => setActive(null)}
                >
                    <Sample isActive={active}/>
                </div>
                <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center mt-3 mx-0 px-0">
                    <h1 className="display-6 text-center py-3">Sample Marketing Solution VI CID Map</h1>
                    <iframe className="border border-2 border-primary-dark px-0" src="https://app.mapline.com/map/map_17a6146c/UlRaYVQzSno3Mno1eVJsd1BkVVlLUTdQbk9hUldwTll5TU5Vck" style={{width: "90%", height: "600px"}} allow="geolocation *"></iframe>
                    <div className="d-flex justify-content-center" style={{"font-size": "10px"}}>
                        <a href="https://mapline.com" target="_blank">Mapping by Mapline</a>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Samples