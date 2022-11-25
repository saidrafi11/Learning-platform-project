import { createBrowserRouter } from "react-router-dom";
import AllSellers from "../../Pages/Dashboard/AllSellers";
import AllUsers from "../../Pages/Dashboard/AllUsers";
import DashboardLayout from "../../Pages/Dashboard/DashboardLayout";
import MyOrders from "../../Pages/Dashboard/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts";
import Home from "../../Pages/Home/Home";
import CategoryCard from "../../Pages/Home/ProductCategory/CategoryCard";
import AddAProduct from "../../Pages/Home/Products/AddAProduct";
import Products from "../../Pages/Home/Products/Products";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp";
import SignUp2 from "../../Pages/Login/Signup2";
import Main from "../Main";
import NotFound from "../Navbar/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<NotFound></NotFound>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp2></SignUp2>
            },
            {
                path:'/category/:id',
                element:<Products></Products>,
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            }
            
        ]
    }
    ,
            {
                path:'/dashboard',
                element:<DashboardLayout></DashboardLayout>,
                children:[
                    {
                        
                            path:'/dashboard/addproduct',
                            element:<AddAProduct></AddAProduct>
                        
                    },
                    {
                        
                            path:'/dashboard/myorders',
                            element:<MyOrders></MyOrders>
                        
                    },
                    {
                        
                            path:'/dashboard/myproducts',
                            element:<MyProducts></MyProducts>
                        
                    },
                    {
                        
                            path:'/dashboard/allsellers',
                            element:<AllSellers></AllSellers>
                        
                    },
                    {
                        
                            path:'/dashboard/allusers',
                            element:<AllUsers></AllUsers>
                        
                    }
                ]
            }
])
export default router;