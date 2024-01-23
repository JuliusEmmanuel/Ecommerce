import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context/Context'

const Body = () => {
    const {mode, cartProducts, setCartProducts} = useContext(Context)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const url = ('https://fakestoreapi.com/products')
    
    useEffect(()=>{
      const getProducts = () => {
        setLoading(true)
        axios.get(url)
        .then((res)=>{
          setProducts(res.data)
        })
        .catch((err)=>{
          setProducts(err)
        })
                // .then((res)=>res.json())
                // .then((json)=> {
                //   setProducts(json)
                  setLoading(false)
                // 
      }
      getProducts()
    }, [])

    
    const addToCart = (prod) => {

      setCartProducts([...cartProducts, prod])
    }

  return (
    <main className={mode?'mainDark' : 'main'}>
         {
        products?.map((product)=>{
          return (
             <div className='pro'>
              <Link to={`/detail/${product.id}`} key={product.id} className={mode? 'productDark' : 'product'}>
                <img src={product.image}/>
                <h1 style={{fontSize:"15px", }}>{product.title}</h1>
                <p>{product.price}</p>
                <p style={{width:"100%", height:"30%", display:"flex", overflowY:"scroll"}}>{product.description}</p>
                
              </Link>
              <button onClick={()=> addToCart(product)}>Add to cart</button>
             </div>
           
          
          )
        })
    }
    {
      loading && 
      <p>Please wait while we fetch your product</p>
    }
    </main>
  )
}

export default Body


