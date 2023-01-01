import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Media from "../../Pages/Media/Media";
import SignUp from "../../Pages/SignUp/SignUp";
import Trending from "../../Pages/Trending/Trending";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/media',
                element: <Media></Media>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            // {
            //     path: '/trending',
            //     element: <Trending></Trending>
            // },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
])

export default router ;