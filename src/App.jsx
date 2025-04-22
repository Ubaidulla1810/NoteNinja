import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './compos/Navbar'
import Home from './compos/Home'
import Paste from './compos/Paste'
import ViewPaste from './compos/ViewPaste'


const router = createBrowserRouter(
  [
    {
    path:"/",
    element:
    <div> 
      <Navbar></Navbar>
      <Home></Home>

    </div>
  },

  {
    path:"/pastes",
    element:
    <div>
      <Navbar></Navbar>
      <Paste></Paste>
    </div>
  },

  {
    path:"/pastes/:id",
    element:
    <div>
      <Navbar></Navbar>
      <ViewPaste></ViewPaste>
    </div>
  }
 
]
)


function App() {
  return (
    <>
    {/* all the path which we have mentioned to use them we have to use this RouterProvider and assign it to router*/}
     <RouterProvider router={router}/>
    </>
  )
}

export default App
