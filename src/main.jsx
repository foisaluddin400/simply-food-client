import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { Root } from './Components/Root/Root.jsx';
import { Home } from './Components/Home/Home.jsx';
import { About } from './Components/About/About.jsx';
import { Services } from './Components/Services/Services.jsx';
import { Contact } from './Components/Contact/Contact.jsx';
import { Register } from './Components/Registar/Register.jsx';
import { Login } from './Components/login/Login.jsx';
import { Userprofile } from './Components/Userprofile/Userprofile.jsx';
import { Blog } from './Components/Blog/Blog.jsx';
import { AuthPriver } from './Components/Authcontext/AuthPriver.jsx';
import { Ourmenu } from './Components/Ourmenu/Ourmenu.jsx';
import { Authprivet } from './Components/AuthPrivet/Authprivet.jsx';
import { UserInfo } from './Components/userInfo/UserInfo.jsx';
import { Viewcart } from './Components/ViewCart/Viewcart.jsx';
import { Checkout } from './Components/checkout/Checkout.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      
      {
        path: '/about',
        element: <Authprivet><About></About></Authprivet>,
      },
      {
        path: '/services',
        element: <Services></Services>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/blog/:id',
        element: <Blog></Blog>,
       
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
        
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/user',
        element: <Userprofile></Userprofile>,
      },
      {
        path: '/ourmenu',
        element: <Authprivet><Ourmenu></Ourmenu></Authprivet>
      },
      
      
      {
        path: '/userinfo',
        element: <Authprivet><UserInfo></UserInfo></Authprivet>,
        loader: ()=> fetch('http://localhost:5000/users')
        
      },
      {
        path: '/view/:id',
        element: <Viewcart></Viewcart>,
        loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        
      },
      {
        path: '/checkout',
        element: <Checkout></Checkout>
      },

    ],
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthPriver>
      <RouterProvider router={router} />
    </AuthPriver>
  </StrictMode>,
)
