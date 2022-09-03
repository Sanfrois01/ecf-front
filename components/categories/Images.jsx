import React from 'react'

export const Images = (props) => {
  return (
    <>
    <article className="mx-5 py-4">
      <img  className ="img-fluid rounded" src={ process.env.API_URL + props.attributes.url} alt= {props.attributes.name} />   
    </article>
    </>
  )
}

export default Images;