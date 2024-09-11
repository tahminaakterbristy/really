import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Residential from "../Residential/Residential";

const router = createBrowserRouter([
    {
    //   path: "/",
      element: <Root></Root>,
      children: [
        {
          path:'/',
          element: <Home></Home>,
        
        },
        {
          path: 'Register',
          element: <Register></Register>
        },
        {
          path: '/Login',
          element: <Login></Login>
        },
        {
          path: 'Residential',
          element: <Residential></Residential>,
         
        }
      ]
    },
  ]);

  export default router