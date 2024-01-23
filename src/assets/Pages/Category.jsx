import {useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import Electronic from "src/image/electronics.png"


const Category = () => {
  const [categories, setCategories] = useState ([])
  const [showCats, setShowCats] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategories(json))
            fetchProducts("electronics")
  },[])

  const fetchProducts =(e)=>{
    fetch(`https://fakestoreapi.com/products/category/${e}`)
            .then(res=>res.json())
            .then(json=>setProducts(json))
  } 

  return (
    <div className='category'>
        <div className='category-holder'>
            {
            //   showCats == false ? categories.map((e)=>(
            //     <div key={e} className='category-item' onClick={()=>fetchProducts(e)}>
            //         <h2>{e}</h2>
            //     </div>
            //   )) : products.map((product)=>{
            //     return(
            //       <Link to={`/detail/${product.id}`} key={product.id} className='product'>
            //         <img src={product.image}/>
            //         <h1 style={{fontSize:"20px"}}>{product.title}</h1>
            //         <p>{product.price}</p>
            //       </Link>
            //     )
            //   })

                categories.map((e)=>{
                        return(
                            <div key={e} className='category-item' onClick={()=>fetchProducts(e)}>
                                <h2>{e}</h2>
                             </div>
                        )
                      })

                      
            }
            {/* {showCats && <button onClick={()=>setShowCats(false)}>back</button>} */}
        </div>
            
                <div className='myproducts'>
                    {
                        products.map((product)=>{
                            console.log(product)
                           return (
                            <div className='productA'>
                                <p style={{fontSize:"25px"}}>{product.category}</p>
                            <img src={product.image} alt='product image'/>
                             <h5 style={{fontSize:"14px"}}>{product.title}</h5>
                            <p>${product.price}</p>
                          </div>
                           )
                        })
                    }
                    {/* `{showCats && <button onClick={()=>setShowCats(false)}>back</button>}` */}
                   
                </div>
            
    </div>
  )
}



export default Category