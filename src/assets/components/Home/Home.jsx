import Banner from "../Banner/banner"
import Navbar from "../Navbar/Navbar"
import Products from "../Products/Products"
import "../Products/Products.css"



const Home = () => {
  return (
    <> 
      <Navbar/>
      <Banner/>
      <div className="product-card-container"><Products/></div>
      

    
    </>

  )
}

export default Home
