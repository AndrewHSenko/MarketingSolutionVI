const Shoutout = ({title, desc, theme, id}) => {
  return (
    <div id={id} className={`d-flex flex-column align-items-center text-center pb-4 ${theme === "dark" ? "bg-primary-dark text-light" : "" }`} style={id ? { scrollMarginTop: 'var(--header-height)' } : undefined}>
        <h1 className="display-1 my-4">{title}</h1>
        <h5 className="lead fs-md-2">{desc}</h5>
    </div>
  )
}

export default Shoutout