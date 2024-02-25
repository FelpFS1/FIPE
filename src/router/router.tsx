import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Querys from "../pages/Querys";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Home/>
    },
    {
        path:'/querys',
        element:<Querys/>
    }
])

export default router