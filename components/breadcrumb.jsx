import React from 'react'

export const Breadcrumb = () => {
  return (
    <>
    <div className="d-flex justify-content-center py-5 ">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/galerie">Galerie</a></li>
            <li className="breadcrumb-item"><a href="/bapteme">Bapteme</a></li>
            <li className="breadcrumb-item"><a href="bebe">Bebe</a></li>
            <li className="breadcrumb-item"><a href="/couple">Couple</a></li>
            <li className="breadcrumb-item"><a href="/famille">Famille</a></li>
            <li className="breadcrumb-item"><a href="/grossesse">Grossesse</a></li>
            <li className="breadcrumb-item"><a href="/mariage">Mariage</a></li>
          </ol>
        </nav>
      </div>      
    </>
  )
}

export default Breadcrumb;