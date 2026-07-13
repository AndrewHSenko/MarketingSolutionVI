import landing from '../assets/landing.png'
import intro from '../assets/intro.png'

const Landing = () => {
  return (
    <div className="container-fluid">
        <div className="row"> {/** Landing */}
            <div class="card text-center text-dark p-0 border-0" >
                <img src={landing} class="card-img img-fluid" alt="House by https://unsplash.com/illustrations/modern-white-building-with-blue-sky-and-shadows-Jbr4MUg4cMA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" />
                <div class="card-img-overlay align-self-start text-dark pt-1">
                    <h1 className="card-title display-lg-1 display-md-3 display-sm-5 fw-bold pt-xxl-5 pt-xl-4 pt-lg-2 mb-0">Marketing Solution VI</h1>
                    <hr className="d-none d-md-block border-1 border-primary-dark opacity-75 w-25 mx-auto py-xl-2"></hr>
                    <p className="display-lg-5 text-muted fs-sm-3 fs-5 pt-0 pt-sm-1 pt-md-0"><i>The</i> HOA Marketing Solution</p>
                </div>
            </div>
        </div>
        <div className="row"> {/** Intro  mx-xxl-5 mx-2 mx-2 ms-lg-5 ms-md-4 ps-xl-5 p-0 */}
            <div className="col-12 col-md-7 d-flex flex-column justify-content-center pe-md-0">
                <div class="card border-0 d-flex flex-column gap-lg-5 gap-4 text-dark mx-2 mx-md-4 ms-lg-5 ps-xxl-5 ps-xl-4">
                    <h1 className="card-title mb-0 pt-sm-2 display-xl-3 display-5 text-md-start text-center px-md-0 px-2 px-sm-5 mx-md-0 mx-sm-3">Broaden your horizons and reach new clients with Marketing Solution VI</h1>
                    <img src={intro} className="intro img-fluid w-75 d-block d-md-none mx-auto" alt="House by Alghozy (https://unsplash.com/@artgho/illustrations?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)"/>
                    <p className="fs-6 fs-lg-5 lead">Marketing Solution VI specializes in finding contact and property information for neighborhoods and cities all over California. With our Common Interest Development (CID) List, you can find new clients, reconnect with old clients, and help scale your business.<br/><br/>Learn which developments are suitable for your business, reach out directly to the HOAs you want to target using our target outreach campaign, market to new counties, and see all the information you need in a spreadsheet and directly on a navigable map. Seek out new opportunities to grow your client base with the help of Marketing Solution VI.</p>
                </div> 
            </div>
            <div className="col-12 col-md-5 d-flex align-items-center p-0">
                <img src={intro} className="intro img-fluid d-none d-md-block ms-auto" alt="House by Alghozy (https://unsplash.com/@artgho/illustrations?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)"/>
            </div>
        </div>
        
    </div>
  )
}

export default Landing