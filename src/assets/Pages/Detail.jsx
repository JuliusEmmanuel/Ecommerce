import {useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Context } from "../../Context/Context"


const Detail = () => {
  const {mode, cartProducts, setCartProducts} = useContext(Context)
  const {id} = useParams ()
  const [details, setDetails] = useState({})

  

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setDetails(json))
  }, [])


  const addToCart = (del) => {
    setCartProducts([...cartProducts, del])
  }

  
  return (
      <div className="details">
          <div key={details.id} className='details1'>
              <img src={details.image}/>
              <h1 style={{fontSize:"20px"}}>{details.title}</h1>
              <p>{details.price}</p>
              <button onClick={()=> addToCart(details)}>Add to cart</button>
            
          </div>
      </div>
  )
}

export default Detail