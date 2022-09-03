import React from "react";
import Header from "../components/header";
import Search from "../components/search";
import Footer from "../components/footer";
import Breadcrumb from "../components/breadcrumb";

const Galerie = () => {

  return (
    <>
      <Header />
      <h1 className="text-center py-5">Galerie</h1>
      <Breadcrumb/>
      <Search />
      <Footer/>
    </>


    
  )
}
export default Galerie;