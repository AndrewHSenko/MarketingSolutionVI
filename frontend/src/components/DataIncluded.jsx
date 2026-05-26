import suit from '../assets/suit.svg'
import crossroads from '../assets/crossroads.svg'
import calendar from '../assets/calendar.svg'
import building from '../assets/building.svg'
import home from '../assets/home.svg'

const DataIncluded = () => {
  return (
   <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 justify-content-center g-4 py-md-5 pt-3 pe-lg-5 text-center">
        <div className="col">
            <div className="card statcard border-primary-dark rounded-5 h-100 text-dark mx-auto">
                <img src={suit} className="card-img-top stattop" alt="Corporation Names" />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title pb-1 border-bottom border-primary lead fs-4 fs-xl-3 mt-auto">Corporation Names</h5>
                    <p className="card-text mt-auto lead fs-6">Legal HOA entity names</p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card statcard border-primary-dark rounded-5 h-100 text-dark mx-auto">
                <img src={crossroads} className="card-img-top stattop" alt="Cross Streets" />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title pb-1 border-bottom border-primary lead fs-4 fs-xl-3 mt-auto">Cross Streets</h5>
                    <p className="card-text mt-auto lead fs-6">Real intersections per city</p>
                </div>
            </div>
        </div>

        <div className="col">
            <div className="card statcard border-primary-dark rounded-5 h-100 text-dark mx-auto">
                <img src={calendar} className="card-img-top stattop" alt="Registration Dates" />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title pb-1 border-bottom border-primary lead fs-4 fs-xl-3 mt-auto">Registration Dates</h5>
                    <p className="card-text mt-auto lead fs-6">Spanning 1985 - 2022</p>
                </div>
            </div>
        </div>

        <div className="col">
            <div className="card statcard border-primary-dark rounded-5 h-100 text-dark mx-auto">
                <img src={building} className="card-img-top stattop" alt="Units" />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title pb-1 border-bottom border-primary lead fs-4 fs-xl-3 mt-auto">Units</h5>
                    <p className="card-text mt-auto lead fs-6">
                    Communities from 20-600 units
                    </p>
                </div>
            </div>
        </div>

        <div className="col">
            <div className="card statcard border-primary-dark rounded-5 h-100 text-dark mx-auto">
                <img src={home} className="card-img-top stattop" alt="More" />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title pb-1 border-bottom border-primary lead fs-4 fs-xl-3 mt-auto">...and more</h5>
                    <p className="card-text mt-auto lead fs-6">Regularly updated for the most accurate information</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DataIncluded

// Adventure road street sign Icon by Pondok Multimedia on <a href="https://icon-icons.com/authors/644-pondok-multimedia">Icon-Icons.com</a>
// Building Icon by CoreUI on <a href="https://icon-icons.com/authors/923-coreui">Icon-Icons.com</a>
// Shirt tie Icon by Nishanth kunder on <a href="https://icon-icons.com/authors/222-nishanth-kunder">Icon-Icons.com</a>
// Calendar schedule dates time Icon by Iconic_ux on <a href="https://icon-icons.com/authors/1428-iconic-ux">Icon-Icons.com</a>
// Home Icon by Umar Irshad on <a href="https://icon-icons.com/authors/591-umar-irshad">Icon-Icons.com</a>