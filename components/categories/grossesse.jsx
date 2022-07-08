import React from 'react'
import { useState } from 'react';

function Grossesse(){


    const [imagesGrossesse, setImageGrossesse] = useState ([

      'Grossesse1.jpg',
      'Grossesse2.jpg',
      'Grossesse3.jpg'
    ]);

    const [show, setShow] = useState(false);

    const handleShowImage = (e) => {
      setShow(!show);
    }

    function ImagesGrossesseComponent() {
      return imagesGrossesse.map((imagesGrossesse) => {
        return (
          <>
          <div className="d-flex justify-content-center my-3"></div>
          <img className="img-thumbnail rounded mx-3 w-100" key={imagesGrossesse.id}  src={imagesGrossesse}></img>
          </>
        );
    });

    
  }

    return (
      <>

      <button type="button" className="btn btn-light mx-5" onClick={handleShowImage }> Grossesse</button>
    
     { show ? <ImagesGrossesseComponent/> : null}
      
      </>
    )
}

export default Grossesse