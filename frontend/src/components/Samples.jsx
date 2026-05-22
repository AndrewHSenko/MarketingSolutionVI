import { useState } from 'react'
import Sample from '../components/Sample.jsx'
import MapSample from '../components/MapSample.jsx'

const Samples = () => {
    const [active, setActive] = useState(null);

    return (
        <div className="container-fluid my-4">
            <div className="row d-flex justify-content-center mb-3">
                <div
                    className="col-12 align-items-center px-5"
                    onMouseEnter={() => setActive("sample")}
                    onMouseLeave={() => setActive(null)}
                >
                    <Sample isActive={active}/>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-3">
                <h1 className="display-6 text-center py-3">Sample Marketing Solution VI CID Map</h1>
                <iframe className="border border-2 border-primary-dark px-0" src="https://app.mapline.com/map/map_17a6146c/UlRaYVQzSno3Mno1eVJsd1BkVVlLUTdQbk9hUldwTll5TU5Vck" style={{width: "70%", height: "600px"}} allow="geolocation *"></iframe>
                <div className="d-flex justify-content-center" style={{"font-size": "10px"}}>
                    <a href="https://mapline.com" target="_blank">Mapping by Mapline</a>
                </div>
            </div>
        </div>
    );
}

export default Samples