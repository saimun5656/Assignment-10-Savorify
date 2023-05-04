import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Recipes from "../Pages/Recipes/Recipes";
import Login from "../Pages/Login/Login/Login";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'recipes/:id',
                element:<Recipes></Recipes>,
                 loader:({params})=>fetch(`https://assignmet-10-chef-recipe-hunter-server-side-saimun5656.vercel.app/chef/${params.id}`)
                //loader:({params})=>fetch(`http://localhost:5000/chef/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])
export default router