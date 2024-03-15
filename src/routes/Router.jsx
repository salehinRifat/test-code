import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../Layouts/MainLayouts/MainLayout";
import AddBlogs from "../pages/Add Blogs/AddBlogs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Layout2 from "../Layouts/Layout2";
import Allblogs from "../pages/All blogs/Allblogs";
import BlogDetails from "../pages/Blog Details/BlogDetails";
import Update from "../pages/update/Update";
import Featured from "../pages/Featured/Featured";
import Wishlist from "../pages/Wishlist/Wishlist";
import PrivateRoutes from "./PrivateRoute";
import Error from "../pages/error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error></Error>,
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addblogs",
                element: <PrivateRoutes><AddBlogs></AddBlogs></PrivateRoutes>
            },
            {
                path: "/allblogs",
                element: <Allblogs></Allblogs>
            },
            {
                path: "/blogdetails/:id",
                element: <BlogDetails></BlogDetails>
            }
            , {
                path: "/updateblog/:id",
                element: <PrivateRoutes><Update></Update></PrivateRoutes>
            },
            {
                path: "/featured",
                element: <Featured></Featured>
            },
            {
                path: "/wishlist",
                element: <PrivateRoutes><Wishlist></Wishlist></PrivateRoutes>
            }

        ]
    },
    {
        path: "/",
        errorElement: <Error></Error>,
        element: <Layout2></Layout2>,
        children: [

            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
]);

export default router;