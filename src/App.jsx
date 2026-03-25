import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Loyout from './Layout/Loyout'
import Home from './page/Home'
import About from './page/About'
import Error from './error'
import Lenguech from './Lenguech'
function App() {
  const router = createBrowserRouter([
   {
    path:"/",
    element:<Loyout />,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/about",
       element:<About/>

      },
      {
        path:"/lenguech/:id",
       element:<Lenguech/>

      }
    ]
   },
   {
    path:"*",
    element:<Error/>
   }
  ])
  return <RouterProvider router={router}/>
}

export default App
