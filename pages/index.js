import Header from "../components/header"
import Footer from "../components/footer"
import { useEffect } from "react";

export default function Home() {


  useEffect(()=>{
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  },[])

  return (
    <>
      <Header/>
      <h1 className="text-center py-5">Charles Cantin - Photographe</h1>
      <img className="rounded mx-auto d-block" src="https://picsum.photos/750/850"></img>
      <Footer/>
    </>
  )
}
