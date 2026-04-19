import landing from '../assets/landing.png'
import intro from '../assets/landing_home.jpeg'

const Landing = () => {
  return (
    <div className="container-fluid">
        <div className="row">
            <div class="card text-center text-dark p-0 border-0" >
                <img src={landing} class="card-img img-fluid" alt="House by https://unsplash.com/illustrations/modern-white-building-with-blue-sky-and-shadows-Jbr4MUg4cMA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" />
                <div class="card-img-overlay align-self-start text-dark pt-1">
                    <h1 className="card-title display-lg-1 display-md-3 display-sm-5 fw-bold pt-xl-4 pt-lg-2 mb-0">Marketing Solution VI</h1>
                    <hr className="d-none d-md-block border-1 border-primary-dark opacity-75 w-25 mx-auto py-xl-2"></hr>
                    <p className="display-lg-5 text-muted fs-sm-3 fs-5"><i>The</i> HOA Marketing Solution</p>

                    
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-6">
                <p>Hello</p>
            </div>
            <div className="col-12 col-md-6">
                <img src={intro} className="img-fluid" alt="House by Alghozy (https://unsplash.com/@artgho/illustrations?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)"/>
            </div>
        </div>
        
    </div>
  )
}

export default Landing

/**
 * <h1 class="d-none d-lg-block display-1 ">Marketing Solution VI</h1>
                    <hr className="d-none d-lg-block border-1 border-dark opacity-75 my-1 w-25 mx-auto pb-lg-3 pt-lg-2" />
                    <h1 class="d-none d-lg-block display-5 text-muted"><i>The</i> HOA Marketing Solution</h1>

                    <h1 class="d-none d-md-block d-lg-none display-2 card-title fw-bold">Marketing Solution VI</h1>
                    <hr className="d-none d-md-block d-lg-none border-1 border-dark opacity-75 my-1 w-25 mx-auto pb-2" />
                    <h1 class="d-none d-md-block d-lg-none text-muted"><i>The</i> HOA Marketing Solution</h1>

                    <h1 class="d-none d-sm-block d-md-none display-3 my-0 card-title fw-bold pb-1">Marketing Solution VI</h1>
                    <p class="d-none d-sm-block d-md-none text-muted"><i>The</i> HOA Marketing Solution</p>
                    
                    <h1 class="d-sm-none display-5 my-0 card-title fw-bold">Marketing Solution VI</h1>
                    <p class="d-sm-none text-muted"></p>
 */