import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";//react-router-dom 

const AppLayout = () => {
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
};
const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/About',
                element:<About/>,
                children:[
                    {
                        path:'Profile',
                        element:<Profile />,
                    },
                    {
                        path:'ProfileClass',
                        element:<ProfileClass />,
                    },
                ]
            },
            {
                path:'/Contact',
                element:<Contact/>,
            },
            {
                path:'/Cart',
                element:<Cart/>,
            },
            {
                path:'/restaurant/:id',
                element:<RestaurantMenu/>,
            },
        ]
    },
    
]);

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={ appRouter }/>);