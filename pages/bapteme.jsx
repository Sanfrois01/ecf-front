import Header from "../components/header";
import Footer from "../components/footer";
import useFetch from "../hooks/useFetch";
import Breadcrumb from "../components/breadcrumb";
import Images from '../components/categories/Images';

const Bapteme = () =>{

  const { loading , error , data } = useFetch(`${process.env.STRAPI_API}api/photos?populate=%2A`)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error !</p>


  const imageData = Object.values(data.data[0].attributes.image.data)

    return (
      <>

            <Header/>
            <Breadcrumb/>
            <h2 className='text-center'>{data.data[0].attributes.content}</h2>
  
         
              
            <div className='d-lg-flex mx-5 py-5'>
              {imageData.map((image ) => (
                <Images key={image.id} {...image}/>
              ))}
           
            </div>
          

            <Footer/>


      
      </>
    )
}





export default Bapteme