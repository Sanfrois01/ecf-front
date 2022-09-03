import Header from "../components/header"
import Footer from "../components/footer"
import Image from 'next/image'
import useFetch from "../hooks/useFetch";

export default function Home() {



  const { loading , error , data } = useFetch(`${process.env.STRAPI_API}api/homes?populate=%2A`)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error !</p>


  const imageData = Object.values(data.data)


  

  return (
    <>
      <Header/>

      <div>
      {data.data.map(home => (
        <div key={home.id} >
          <h1 className="text-center py-3 mx-5">{home.attributes.title}</h1>
        <p className="text-center fs-2 py-3 mx-5">{home.attributes.description}</p>
        </div>
      ))}
      <div className="d-flex justify-content-center m-3 p-3">
      <Image 
      src= { process.env.API_URL + imageData[0].attributes.home_image.data[0].attributes.url}
      alt="Charles Cantin - Photographe"
      width={550}
      height={550}
      />
      </div>
        
    </div>
      <Footer/>
    </>
  )
}
