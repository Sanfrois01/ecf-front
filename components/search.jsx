import React from 'react';
import { useEffect, useState } from "react";
import useFetch from '../hooks/useFetch';
import Images from './categories/Images';

function Search() {

  const [searchPhotos, setSearchPhotos] = useState ("");


  const { loading , error , data } = useFetch(`${process.env.STRAPI_API}api/photos?populate=%2A`)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error !</p>



  const imageData = Object.values(data.data[6].attributes.image.data)


  const handleSearchPhotos= (e) => {
    let value = e.target.value;
    value.length > 2 && setSearchPhotos(value);
  };


  return (
    <>
    <div className="d-flex justify-content-center py-5 ">
      <form className="d-flex">
          <input  className="form-control me-3" 
                  type="search" 
                  placeholder="Rechercher catégorie" 
                  aria-label="Search"
                  onChange={ handleSearchPhotos }/>
      </form>
    </div>



    <h2 className='text-center'>{data.data[6].attributes.content}</h2>
  
              
  <div className='d-lg-flex mx-5 py-5'>
    {imageData
    .filter((image)=> {
      return image.attributes.url.includes(searchPhotos.toLowerCase());
    })
    .map((image ) => (
      <Images  key={image.id} {...image}/>
    ))}
 
  </div>

    </>
    );
}
export default Search