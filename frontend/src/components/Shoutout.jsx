const Shoutout = ({title, desc, theme}) => {
  return (
    <div className={`d-flex flex-column align-items-center text-center ${theme === "dark" ? "bg-primary-dark text-light" : "" }`}>
        <h1 className="display-1 my-4">{title}</h1>
        <h5 className="lead fs-md-2">{desc}</h5>
    </div>
  )
}

export default Shoutout