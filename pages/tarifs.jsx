import Header from "../components/header";
import React from "react";
import Footer from "../components/footer";
import useFetch from "../hooks/useFetch";


const Tarifs = () => {

  const { loading , error , data } = useFetch(`${process.env.STRAPI_API}api/price-tables`)


  if (loading) return <p>Loading...</p>
  if (error) return <p>Error !</p>

  
  function ProductRow ({product}) {
    return (
      <tr>
        <td>{product.attributes.type_prestation}</td>
        <td>{product.attributes.description}</td>
        <td>{product.attributes.price}</td>
      </tr>
    )
  }
  
  function ProductCategoryRow ({category}){
    return(
      <tr>
        <th>{category}</th>
      </tr>
    )
  }
  
  function ProductTable({products}){
    const rows =[];
    let lastCategory = null;
  
    products.forEach(product => {
      if (product.category !== lastCategory){
        lastCategory = product.category
        rows.push(<ProductCategoryRow category={product.category}/>)
      }
      rows.push(<ProductRow product={product}/>)
    })
  
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Prestation</th>
            <th>Description</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  
  }
  
  class  FilterableProductTable extends React.Component {
    render () {
      const {products} = this.props
      return (
          <ProductTable key={products.id} products={products}/>
        )}  
  }

  return (
    <>
      <Header />
      <h1 className= "text-center py-5">Mes tarifs</h1>
      <div className="d-flex justify-content-center mx-5">

      <FilterableProductTable products={data.data}/>
      </div>
      <Footer/>
    </>
  )
}
export default Tarifs;

