import { useState, useEffect, useContext} from "react"
import { Context } from "../../../Context/Context"
import "./Products.css"

const Products = () => {
    const [products, setProducts] = useState([])
    const { cart, setCart } = useContext(Context)
    useEffect(() => {
        fetch("data.json")
        .then((response) => response.json())
        .then((data) => setProducts(data))

    }, [])

    const buyProducts =(product) => {
        console.log(product)

    }

    return products.map((product) => {
        return (
            <div className="card" key = {product.id}>    
                <img src= {product.img} alt="img-products" />
                <h3>{product.name}</h3>
                <h4>{product.price}</h4>
                <button onClick={() => buyProducts(product)}>Add to cart</button>
            </div>
        )
    })
}

export default Products