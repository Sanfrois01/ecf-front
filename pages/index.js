import Header from "../components/header"
import Footer from "../components/footer"

export default function Home() {
  return (
    <>
      <Header/>
      <h1 className="text-center py-5">Charles Cantin - Photographe</h1>
      <img className="rounded mx-auto d-block" src="https://picsum.photos/750/850"></img>
      <Footer/>
    </>
  )
}
