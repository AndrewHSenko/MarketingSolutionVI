const Stat = ({num, title, pos}) => {
  return (
    <div className={`w-100 text-md-${pos} text-center my-2`}>
        <div className="d-inline-flex flex-column justify-content-center border-0 text-center">
            <div className="border border-1 border-primary-dark rounded-pill bg-primary px-md-5 px-2 py-md-2 pt-4 py-3">
                <h1 className="display-md-4 fs-2">{num}</h1>
                <h1 className="lead fs-md-2 fs-6 fst-italic">{title}</h1>
            </div>
        </div>
    </div>
    
  )
}

export default Stat