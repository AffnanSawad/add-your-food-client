import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// react-router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/root.jsx';
import ErrorPage from './components/root/ErrorPage/ErrorPage.jsx';
import Home from './components/root/Home/Home.jsx';
import AddFood from './components/root/AddFood/AddFood.jsx';
import MyFood from './components/root/MyFood/MyFood.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children:[

  {
    path:'/',
    element: <Home></Home>
  },
  {
    path:'/addfood',
    element: <AddFood></AddFood>
  },
  {
    path:'/myfood',
    element: <MyFood></MyFood>,

    loader: ()=>fetch('http://localhost:5000/food')
  },



    ]
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
