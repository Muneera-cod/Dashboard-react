import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Components/Dashbroard/Dashboard";
import Addwidget from "../Components/Widget/Addwidget";
export const router=createBrowserRouter([
    {
        path:'/',
        element:<Dashboard/>
    },
    {
        path:'/addwidget',
        element:<Addwidget/>
    }
]

)