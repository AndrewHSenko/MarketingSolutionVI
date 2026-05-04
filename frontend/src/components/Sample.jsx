import sample from "../assets/sample_sheet.jpeg";

const Sample = () => {
  return (
    <div class="container-fluid">
        <div class="row d-flex justify-content-center ">
            <div class="col-lg-8 text-center">
                <button class="card text-dark p-0" >
                    <img src={sample} class="card-img opacity-50" alt="Sample spreadsheet" />
                    <div class="card-img-overlay align-self-center bg-warning bg-opacity-75">
                        <h4 class="lead-5 card-title">Sample Marketing Solution VI CID List</h4>
                        <p class="card-text"><small>Click here to download!</small></p>
                    </div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Sample