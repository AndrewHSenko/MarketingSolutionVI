const Shoutout = ({title, desc}) => {
  return (
    <div className="d-flex flex-column align-items-center text-center my-3">
        <h1 className="display-1 my-4">{title}</h1>
        <h5 className="lead fs-md-2">{desc}</h5>
    </div>
  )
}

export default Shoutout