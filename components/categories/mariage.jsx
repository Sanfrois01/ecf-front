import React from 'react'
import { useState } from 'react';

function Mariage(){


    const [imagesMariage, setImageMariage] = useState ([

      'Mariage1.jpg',
      'Mariage2.jpg',
      'Mariage3.jpg'
    ]);

    const [show, setShow] = useState(false);

    const handleShowImage = (e) => {
      setShow(!show);
    }

    function ImagesMariageComponent() {
      return imagesMariage.map((imagesMariage) => {
        return (
          <>
          <div className="d-flex justify-content-center my-3"></div>
          <img className="img-thumbnail rounded mx-3 w-100" key={imagesMariage.id}  src={imagesMariage}></img>
          </>
        );
    });

    
  }

    return (
      <>

      <button type="button" className="btn btn-light mx-5" onClick={handleShowImage }> Mariage</button>
    
     { show ? <ImagesMariageComponent/> : null}
      
      </>
    )
}

export default Mariage