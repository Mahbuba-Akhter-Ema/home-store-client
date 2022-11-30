import { createBrowserRouter } from "react-router-dom";
import Dashboardlayout from "../../Layout/Dashboardlayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Categories from "../../Pages/Home/Categories/Categories";
import Gallery from "../../Pages/Home/Gallery/Gallery";
import BedRoom from "../../Pages/Home/Home/BedRoom";
import DiningRoom from "../../Pages/Home/Home/DiningRoom";
import Home from "../../Pages/Home/Home/Home";
import LivingRoom from "../../Pages/Home/Home/LivingRoom";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";

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
                element: <DiningRoom></DiningRoom>
            },
            {
                path: '/Bedroom',
                element: <BedRoom></BedRoom>
            },
            {
                path: '/LivingRoom',
                element: <LivingRoom></LivingRoom>
            }
        ]
    },
    {
        path: '/dashboardlayout',
        element: <Dashboardlayout></Dashboardlayout>,
        children: [
            
        ]
    }
])