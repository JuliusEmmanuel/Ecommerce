import React,{useEffect, useState} from 'react'
import { useContext } from 'react';
import { Context } from '../../Context/Context';

const Cart = () => {
  const {setCartProducts, cartProducts} = useContext(Context)

  const [carts, setCarts] = useState()
  const [networkError, setNetworkError] = useState()
  const [totalCartQuantity, setTotalCartQuantity] = useState([])
  // console.log(carts)


useEffect(()=>{
  fetch('https://fakestoreapi.com/carts')
  .then((res)=> res.json())
  .then((json)=> setCarts(json))
  .catch(error=> setNetworkError(error.message))
  // .then((json)=>console.log(json))
  unFamiliarItemsFromCart()
},[])


const removeFromCart = (ind) => {
  const updatedCart = cartProducts.filter((cart, index) => index !== ind);
  setCartProducts(updatedCart);
}

const totalPrice = () => {
  if (!cartProducts || cartProducts.length === 0) {
    return (0); 
  }

  const total = cartProducts.reduce((accumulator, cart) => {
    return accumulator + cart.price;
  }, 0);

  return total;
};


console.log(totalCartQuantity)

const removeAll = () => {
  setCartProducts([])
  setTotalCartQuantity([])

}

const unFamiliarItemsFromCart = () => {
  let removedUnfamiliaritem =   new Set(cartProducts)
  let newUnfamiliaritem = Array.from(removedUnfamiliaritem)
  setTotalCartQuantity(newUnfamiliaritem)
}


return (
  <div className='body1'>
    <div className='body3'>
      <p>total price</p>
      <p>{totalPrice()}</p>
      <button onClick={() => removeAll()}>Clear all</button>
    </div>
    {totalCartQuantity?.map((cart, index) => {
      let newArrayToBeReturned = [];
      cartProducts?.forEach((productQty) => {
        if (productQty.id === cart.id) {
          newArrayToBeReturned.push(productQty);
        }
      });

      return (
        <div key={cart.id} className='productWrap1'>
          <img src={cart.image} alt='product image' />
          <h2>category: {cart.category}</h2>
          <h2>description: {cart.description}</h2>
          <h2>price: {cart.price}</h2>
          <h2>title: {cart.title}</h2>
          <h2>QTY: {newArrayToBeReturned.length}</h2>
          <button onClick={() => removeFromCart(index)}>Remove from cart</button>
        </div>
      );
    })}
    {networkError === 'Failed to fetch' && <p>No network. Check internet connection</p>}
  </div>
);

}

export default Cart


