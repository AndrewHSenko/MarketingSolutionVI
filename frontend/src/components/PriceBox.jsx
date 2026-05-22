const PriceBox = ({box, isActive}) => {
  return (
    <div key={box.label}
         className={`d-flex flex-column align-items-center justify-content-center p-3 rounded border
         ${isActive ? "border-2 border-primary bg-primary-subtle" : "border-1 border-primary-dark bg-light"}`}>
            <div className={`text-nowrap fw-semibold text-uppercase text-center lead fs-xl-3 fs-lg-4 fs-md-6 fs-0 ${isActive ? "text-primary-dark" : "text-primary-dark"}`}>
                {box.label}
            </div>
            <div
                className={`text-center p-0 ${isActive ? "text-gray" : "text-primary-dark"}`}>
                Listings
            </div>
            <div
                className={`text-center mt-2 lead fs-5 ${isActive ? "text-primary-dark fs-3" : "text-light-gray"}`}>
                {box.price}
            </div>
    </div>
  )
}

export default PriceBox