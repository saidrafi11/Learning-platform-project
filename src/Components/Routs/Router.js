import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Pages/Blog/Blog";
import AllSellers from "../../Pages/Dashboard/AllSellers";
import AllUsers from "../../Pages/Dashboard/AllUsers";
import DashboardLayout from "../../Pages/Dashboard/DashboardLayout";
import MyOrders from "../../Pages/Dashboard/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts";
import Home from "../../Pages/Home/Home";
import AddAProduct from "../../Pages/Home/Products/AddAProduct";
import Products from "../../Pages/Home/Products/Products";
import Login from "../../Pages/Login/Login";
import SignUp2 from "../../Pages/Login/Signup2";
import Main from "../Main";
import NotFound from "../Navbar/NotFound/NotFound";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "./AdminRoute";
import SellerRoute from "./SellerRoute";

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
                path:'/blog',
                element:<Blog></Blog>,
                loader:()=> fetch('https://wamp-server.vercel.app/blog')
            },
            {
                path:'/category/:id',
                element:<PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({params})=> fetch(`https://wamp-server.vercel.app/category/${params.id}`)
            }
            
        ]
    }
    ,
            {
                path:'/dashboard',
                element:<PrivateRoute>
                    <DashboardLayout></DashboardLayout>
                </PrivateRoute>,
                children:[
                    {
                        
                            path:'/dashboard/addproduct',
                            element:<SellerRoute><AddAProduct></AddAProduct></SellerRoute>
                        
                    },
                    {
                        
                            path:'/dashboard/myorders',
                            element:<PrivateRoute><MyOrders></MyOrders></PrivateRoute>
                        
                    },
                    {
                        
                            path:'/dashboard/myproducts',
                            element:<SellerRoute><MyProducts></MyProducts></SellerRoute>
                        
                    },
                    {
                        
                            path:'/dashboard/allsellers',
                            element:<AdminRoute><AllSellers></AllSellers></AdminRoute>
                        
                    },
                    {
                        
                            path:'/dashboard/allusers',
                            element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
                        
                    }
                ]
            }
])
export default router;