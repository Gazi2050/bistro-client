import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Menu from "../Components/Menu/Menu";

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
        ]
    },
]);