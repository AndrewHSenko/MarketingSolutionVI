import sample from "../assets/counties.png";

const MapSample = () => {
  return (
    <div className="container-fluid">
  <div className="row justify-content-center align-items-center">
    <div className="col-12 col-md-8 col-lg-6 text-center">
      <button className="card text-dark p-0 mx-auto" style={{ maxWidth: '500px' }}>
        <img src={sample} className="card-img opacity-50" alt="Sample spreadsheet" />
        <div className="card-img-overlay align-self-center bg-warning bg-opacity-75">
          <h4 className="lead-5 card-title">Sample Marketing Solution VI CID List</h4>
          <p className="card-text"><small>Click here to download!</small></p>
        </div>
      </button>
    </div>
  </div>
</div>
  )
}

export default MapSample