import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layout/MainLayouts";
import Home from "../Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        errorElement: <p>no data</p>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "statistics",
                element: <Home />
            },
            {
                path: "/dashboard",
                element: <Home />
            },
            {
                path: "/reviwe",
                element: <Home />
            },

        ]
    }
]);

export default router;