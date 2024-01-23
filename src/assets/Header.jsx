import { useContext } from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
import { Context } from '../Context/Context'

const Header = () => {
    const {mode, setMode, cartProducts} = useContext(Context)

    console.log(cartProducts)
    const unFamiliarItemsFromCart = () => {
      let removedUnfamiliaritem =   new Set(cartProducts)
      let newUnfamiliaritem = Array.from(removedUnfamiliaritem)
      console.log(cartProducts, "Cart products")
      if(cartProducts.length === 0) {
        return 0
      } else {

          return newUnfamiliaritem.length
      }
    }
 

  return (
    <div className={mode? "headDark" : "head"}>
        <div className='first'>
            <h1>GBOLO LORD</h1>
        </div>
        <div className='second'>
            <NavLink to="/" className={({isActive}) => isActive ? "active" : "inactive"}>Home</NavLink>
            <NavLink to="/Category" className={({isActive}) => isActive ? "active" : "inactive"}>Category</NavLink>
            <NavLink to="/Cart" className={({isActive}) => isActive ? "active" : "inactive"}>Cart</NavLink>
            <NavLink to="/Cart" style={{width:"10%", height:"50%", backgroundColor:"blue", display:"flex",
             alignItems:"center", justifyContent:"center", borderRadius:"50%",color:"white", cursor:"pointer"}}>{unFamiliarItemsFromCart()}</NavLink>
        </div> 
        <div className='third'>
            <div className='fourth'>
                <div className='fifth'>
                  <label class="switch">
                    <input type="checkbox" checked={mode} onChange={()=> setMode(!mode)}/>
                    <span class="slider round"></span>
                  </label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header