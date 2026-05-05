import { useState } from 'react'
import Sample from '../components/Sample.jsx'
import MapSample from '../components/MapSample.jsx'

const Samples = () => {
    const [active, setActive] = useState(null);

    return (
        <div className="container-fluid mt-4">
            <div className="row d-flex justify-content-center">
                <div
                    className={`col-12 col-lg-6 align-items-center  ${active === "sample" ? "bg-primary" : ""}`}
                    onMouseEnter={() => setActive("sample")}
                    onMouseLeave={() => setActive(null)}
                >
                    <Sample isActive={active}/>
                </div>
                <div
                    className={`col-12 col-lg-6 align-items-center ${active === "map" ? "bg-primary" : ""}`}
                    onMouseEnter={() => setActive("map")}
                    onMouseLeave={() => setActive(null)}
                >
                    <MapSample isActive={active}/>
                </div>
            </div>
        </div>
    );
}

export default Samples