import { createBrowserRouter } from "react-router-dom";
import Dashboardlayout from "../../Layout/Dashboardlayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProducts from "../../Pages/Dashboard/AddProducts/AddProducts";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllReport from "../../Pages/Dashboard/AllReport/AllReport";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Categories from "../../Pages/Home/Categories/Categories";
import Gallery from "../../Pages/Home/Gallery/Gallery";
import BedRoom from "../../Pages/Home/Home/BedRoom";
import DiningRoom from "../../Pages/Home/Home/DiningRoom";
import Home from "../../Pages/Home/Home/Home";
import LivingRoom from "../../Pages/Home/Home/LivingRoom";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/categories',
                element: <Categories></Categories>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/featured',
                element: <Gallery></Gallery>
            },
            
            {
                path: '/Dining',
                element: <PrivateRoute><DiningRoom></DiningRoom></PrivateRoute>
            },
            {
                path: '/Bedroom',
                element: <PrivateRoute><BedRoom></BedRoom></PrivateRoute>
            },
            {
                path: '/LivingRoom',
                element: <PrivateRoute><LivingRoom></LivingRoom></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboardlayout',
        element: <Dashboardlayout></Dashboardlayout>,
        children: [
            {
                path: '/dashboardlayout/allseller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboardlayout/allBuyer',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboardlayout/Report',
                element: <AllReport></AllReport>
            },
            {
                path: '/dashboardlayout/myorder',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboardlayout/addproduct',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/dashboardlayout/myproduct',
                element: <MyProducts></MyProducts>
            },
        ]
    }
])