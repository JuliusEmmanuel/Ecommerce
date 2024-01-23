import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/Pages/Home';
import Layout from './assets/Pages/Layout';
import Category from './assets/Pages/Category';
import Cart from './assets/Pages/Cart';
import Detail from './assets/Pages/Detail';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/Category",
        element: <Category/>,
      },
      {
        path: "/Cart",
        element: <Cart/>,
      },
      {
        path: "/Detail/:id",
        element: <Detail/>,
      }
    ]
  },
]);


const App = () => { 
  
  return (
    <>
      <RouterProvider router={router} />
       
    </>
  )
}

export default App 


0