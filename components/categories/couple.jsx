import React from 'react'
import { useState } from 'react';

function Couple(){


    const [imagesCouple, setImageCouple] = useState ([

      'couple1.jpg',
      'couple2.jpg',
      'couple3.jpg'
    ]);

    const [show, setShow] = useState(false);

    const handleShowImage = (e) => {
      setShow(!show);
    }

    function ImagesCoupleComponent() {
      return imagesCouple.map((imagesCouple) => {
        return (
          <>
          <div className="d-flex justify-content-center my-3"></div>
          <img className="img-thumbnail rounded mx-3 w-100" key={imagesCouple.id}  src={imagesCouple}></img>
          </>
        );
    });

    
  }

    return (
      <>

      <button type="button" className="btn btn-light mx-5" onClick={handleShowImage }> Couple</button>
    
     { show ? <ImagesCoupleComponent/> : null}
      
      </>
    )
}

export default Couple