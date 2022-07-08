import React from 'react'
import { useState ,useEffect } from 'react';

function Bebe(){

    useEffect(()=>{[
    
    ]
    },[]);

    const [imagesBebe, setImageBebe] = useState ([

      'bebe1.jpg',
      'bebe2.jpg',
      'bebe3.jpg'
    ]);

    const [show, setShow] = useState(false);

    const handleShowImage = (e) => {
      setShow(!show);
    }

    function ImagesBebeComponent() {
      return imagesBebe.map((imagesBebe) => {
        return (
          <>
          <div className='d-flex justify-content-center my-3'></div>
          <img className="img-thumbnail rounded mx-3 w-100" key={imagesBebe.id}  src={imagesBebe}></img>
          </>
        );
    });
  }

    return (
      <>

      <button type="button" className="btn btn-light mx-5" onClick={handleShowImage }> Bebe</button>
    
     { show ? <ImagesBebeComponent/> : null}
      
      </>
    )
}

export default Bebe