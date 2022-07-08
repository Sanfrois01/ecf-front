import React from 'react'
import { useState } from 'react';

function Famille(){


    const [imagesFamille, setImageFamille] = useState ([

      'Famille1.jpg',
      'Famille2.jpg',
      'Famille3.jpg'
    ]);

    const [show, setShow] = useState(false);

    const handleShowImage = (e) => {
      setShow(!show);
    }

    function ImagesFamilleComponent() {
      return imagesFamille.map((imagesFamille) => {
        return (
          <>
          <div className="d-flex justify-content-center my-3"></div>
          <img className="img-thumbnail rounded mx-3 w-100" key={imagesFamille.id}  src={imagesFamille}></img>
          </>
        );
    });

    
  }

    return (
      <>

      <button type="button" className="btn btn-light mx-5" onClick={handleShowImage }> Famille</button>
    
     { show ? <ImagesFamilleComponent/> : null}
      
      </>
    )
}

export default Famille