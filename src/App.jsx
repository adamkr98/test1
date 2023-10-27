import './App.css'
import Signin from './Routes/Signin'
import Signup from './Routes/Signup'
import Navbar from './Navbar'
import Footer from './Routes/Footer'
import { Vegetables } from './Routes/Vegetables'
import { Fruits } from './Routes/Fruits'
import { Meat } from './Routes/Meat'
import { Fish } from './Routes/Fish'
import { Home } from './Routes/Home'
import { Categories } from './Routes/Categories'
import  ProfileBuyer  from './Routes/ProfileBuyer'
import ProfileSeller from './Routes/ProfileSeller'

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext'
import { Protected } from './Routes/Protected'


const HeaderLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);


const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/signin",
        element: <Signin></Signin>
      },
      {
        path: "/register",
        element: <Signup></Signup>
      },
      {
        path: "/home",
        element: <Protected><Home /></Protected>
      },
      {
        path: '/categories',
        element: <Protected><Categories /></Protected>
      },
      {
        path: '/vegetables',
        element: <Protected><Vegetables /></Protected>
      },
      {
        path: '/fruits',
        element: <Protected><Fruits /></Protected>
      },
      {
        path: '/meat',
        element: <Protected><Meat /></Protected>
      },
      {
        path: '/fish',
        element: <Protected><Fish /></Protected>
      },
      {
        path: '/profileBuyer',
        element: <Protected><ProfileBuyer /></Protected>
      },
      {
        path: '/profileSeller',
        element: <Protected><ProfileSeller /></Protected>
      }
    ]
  }
])

function App() {
  return (
    <AuthContext>

      <RouterProvider router={router}>
        <Navbar />
        <Footer />
      </RouterProvider>
      
    </AuthContext>
  )
}

export default App
