import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Menu from "../Components/Menu/Menu";
import Order from "../Components/Order/Order";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Components/DashBoard";
import Cart from "../Components/Cart/Cart";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <PrivateRoute><Order></Order></PrivateRoute>
            },
        ]
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/signUp",
        element: <Signup></Signup>,
    },
    {
        path: "/dashBoard",
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: '/dashBoard/cart',
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            },
        ]
    },
]);