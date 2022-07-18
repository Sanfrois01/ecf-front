import React from 'react'
import { useState } from 'react';

export default function ButtonCategory() {

  const [imagesBapteme, setImageBapteme] = useState ([

    'bapteme1.jpg',
    'bapteme2.jpg',
    'bapteme3.jpg'
  ]);


  const [show, setShow] = useState(false);

  const handleShowImage = (e) => {
    setShow(!show);
  }

      function ImagesBaptemeComponent() {
      return imagesBapteme.map((imagesBapteme) => {
        return (
          <>
          <div className="d-flex justify-content-center my-3"></div>
          <img className="img-thumbnail rounded mx-3 w-100" key={imagesBapteme.id}  src={imagesBapteme}></img>
          </>
        );
    });
  }


  return (

    <>
    <button type="button" className="btn btn-light mx-5 rows col" onClick={handleShowImage }>Bapteme</button>
    <button type="button" className="btn btn-light mx-5 rows col" onClick={handleShowImage }>Bebe</button>
    <button type="button" className="btn btn-light mx-5 rows col" onClick={handleShowImage }>Couple</button>
    <button type="button" className="btn btn-light mx-5 rows col" onClick={handleShowImage }>Famille</button>
    <button type="button" className="btn btn-light mx-5 rows col" onClick={handleShowImage }>Grossesse</button>
    <button type="button" className="btn btn-light mx-5 rows col" onClick={handleShowImage }>Mariage</button>



    </>
    
  )
}
