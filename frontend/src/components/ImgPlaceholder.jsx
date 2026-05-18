import React from 'react'

const ImgPlaceholder = ({text}) => {
  return (
    <div className="d-flex align-items-center justify-content-center img-placeholder" style={{minHeight: "20rem"}}>
          <h1 className="display-4 text-center">{text}</h1>
    </div>
  )
}

export default ImgPlaceholder