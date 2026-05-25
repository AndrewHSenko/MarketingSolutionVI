import sample from "../assets/sample_sheet.png";

const Sample = ({isActive}) => {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 ps-1">
      <div class="card text-dark p-0 px-5 py-5 mx-auto">
          <img src={sample} class="card-img" alt="Sample spreadsheet" />
          <div class="card-img-overlay p-0 d-md-none d-flex justify-content-center align-items-center h-100 bg-primary bg-opacity-75">
              <button className="bg-primary p-3 w-100">
                <h4 class="lead fs-5">Click here to download!</h4>
              </button>
          </div>
          <button class={`card-img-overlay p-0 d-md-flex d-none justify-content-center align-items-center h-100 bg-primary ${isActive === 'sample' ? "bg-opacity-75" : "bg-opacity-25"}`}>
            <div className="bg-primary p-3 w-100 ">
                <h4 class="lead fs-5">Click here to download!</h4>
              </div>
          </button>
      </div>
    </div>
  )
}

export default Sample