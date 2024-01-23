import React, { useState, createContext, useReducer, useEffect } from "react";
const initialState = [];
const reducer = (state, action) =>{
  switch(action.type){
    case "addToCart":{
      if (state.lenght == 0) {
        const QTY =1
        return [...state, {...action.payload, QTY:QTY}]
      } else {
        const check = state.findIndex ((e)=> e.id ==action.payload.id)
        if (check == -1) {
          return [...state, {...action.payload, QTY:1}]
        } else {
          state[check].QTY += 1
        }
      }
    }
    default: return state
  }
}
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [mode, setMode] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

 

  return (
    <Context.Provider value={{ mode, setMode, cartProducts, setCartProducts }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
