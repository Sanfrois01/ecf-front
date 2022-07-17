import React, { useEffect , useState } from 'react';
import Image from 'next/image'

const Bapteme = () =>{



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
          <Image className="Image-thumbnail rounded mx-3 w-100" key={imagesBapteme.id}  src={imagesBapteme}></Image>
          </>
        );
    });
  }

    return (
      <>
      <button type="button" className="btn btn-light mx-5 " onClick={handleShowImage }> Bapteme</button>
    
     { show ? <ImagesBaptemeComponent/> : null}
      </>
    )
}

export default Bapteme