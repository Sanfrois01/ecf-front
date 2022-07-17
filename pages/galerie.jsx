
import { useState , useEffect } from "react";
import React from "react";
import ButtonCategory from "../components/ButtonCategory";

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

  return (
    <>
    <Header/>
    <h1 className="text-center py-5">Galerie</h1>
    <Search/>
    <div className="d-flex justify-content-center">
    <ButtonCategory name = "Bapteme"/>
    <ButtonCategory name = "Bebe"/>

  
    </div>

    </>
  )
}
export default Galerie;