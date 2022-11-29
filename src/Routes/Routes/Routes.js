import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
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
    }
])