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
import  AccessDenied  from './Routes/AccessDenied'

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { AuthContextProvider } from './Context/AuthContext'
import  Protected  from './Routes/Protected'


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
        path: '/categories',
        element: <Protected requiredRole="Buyer"><Categories /></Protected>
      },
      {
        path: '/vegetables',
        element: <Protected requiredRole="Buyer"><Vegetables /></Protected>
      },
      {
        path: '/fruits',
        element: <Protected requiredRole="Buyer"><Fruits /></Protected>
      },
      {
        path: '/meat',
        element: <Protected requiredRole="Buyer"><Meat /></Protected>
      },
      {
        path: '/fish',
        element: <Protected requiredRole="Buyer"><Fish /></Protected>
      },
      {
        path: '/profileBuyer',
        element: <Protected requiredRole="Buyer"><ProfileBuyer /></Protected>
      },
      {
        path: '/profileSeller',
        element: <Protected requiredRole="Seller"><ProfileSeller /></Protected>
      },
      {
        path: '/accessDenied',
        element: <AccessDenied />
      }
    ]
  }
])

function App() {
  return (
    <AuthContextProvider>

      <RouterProvider router={router}>
        <Navbar />
        <Footer />
      </RouterProvider>
      
    </AuthContextProvider>
  )
}

export default App
