import sample from "../assets/counties.png";

const MapSample = ({isActive}) => {
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div class="card text-dark p-0" >
          <img src={sample} class="card-img" alt="Sample spreadsheet" />
          <div class="card-img-overlay p-0 d-md-none d-flex justify-content-center align-items-center h-100 bg-primary bg-opacity-75">
              <button className="bg-primary p-3 w-100">
                <h4 class="lead fs-3 card-title">Sample Marketing Solution VI CID Map</h4>
                <p class="card-text"><small>Click here to download!</small></p>
              </button>
          </div>
          <button class={`card-img-overlay p-0 d-md-flex d-none justify-content-center align-items-center h-100 bg-primary ${isActive === "map" ? "bg-opacity-75" : "opacity-0"}`}>
            <div className="bg-primary p-3 w-100 ">
                <h4 class="lead fs-3 card-title">Sample Marketing Solution VI CID Map</h4>
                <p class="card-text"><small>Click here to download!</small></p>
              </div>
          </button>
      </div>
    </div>
  )
}

export default MapSample