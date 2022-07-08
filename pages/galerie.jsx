
import { useState , useEffect } from "react";
import React from "react";
import Bapteme from "../components/categories/bapteme";
import Bebe from "../components/categories/Bebe";
import Couple from "../components/categories/couple"
import Famille from "../components/categories/Famille"
import Grossesse from "../components/categories/Grossesse"
import Mariage from "../components/categories/Mariage"


import Header from "../components/header";
import Search from "../components/search";

const Galerie = () => {

  const [datas, setDatas] = useState ([]);
  const [searchCategories, setSearchCategories] = useState ("");

    useEffect( ()=> {
   fetch('https://api.unsplash.com/photos/?client_id=9cIpw06nNZZIL58L3dqab_EZPYaRPhmv3-qQUYBuVsY')
   .then(response => response.json())
   .then(json => setDatas(json))

  },[]); 


  function ImageGalery({images}){
    <img></img>
  }

  class PopImageGalery extends React.Component {
    render () {
      const{images} = this.props
      return (
        <ImageGalery images={images} />
      )}
  }

  

  return (
    <>
    <Header/>
    <h1 className="text-center py-5">Galerie</h1>
    <Search/>
    </>
  )
}
export default Galerie;