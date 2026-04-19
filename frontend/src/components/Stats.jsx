import Stat from '../components/Stat.jsx'

const Stats = () => {
  return (
    <div className="container-fluid my-3">
        <div className="row gap-4 gap-md-0 align-items-center">
            <div className="col-12 col-md-6 px-lg-5 px-2">
                <div className="row mx-2 align-items-center">
                    <div className="col-4 col-md-12">
                        <Stat num={"23,000"} title={"Registered HOAs"} pos={"end"}/>
                    </div>
                    <div className="col-4 col-md-12">
                        <Stat num={"60"} title={"Counties"} pos={"center"}/>
                    </div>
                    <div className="col-4 col-md-12">
                        <Stat num={"14"} title={"Different Categories"} pos={"start"}/>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <p className="me-md-5 pe-md-3 fs-6 fs-lg-5 lead">More than 23,000 HOAs, COAs, and developments are registered with Marketing Solution VI, meaning you now have access to thousands of properties to add to your client list. We regularly contact communities and scour online listings to find new developments and information to update our list, keeping your records accurate and as up-to-date as possible.<br/><br/>Our list includes a wealth of information, including development type, registration date, number of units, cross streets, contact information, and more! You will have the most updated data, complete with the managing agent's information and a registered contact address, for every property that you want, all in one place. Keep your outreach organized with our CID list and map.</p>
            </div>
        </div>
    </div>
  )
}

export default Stats