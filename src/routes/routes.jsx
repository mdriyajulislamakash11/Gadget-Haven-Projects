import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layout/MainLayouts";
import Home from "../Home/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Review from "../Pages/Review";
import ProductCard from "../components/ProductCard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        errorElement: <p>no data</p>,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("../categories.json")
            },
            {
                path: "/category/:categories",
                element: <ProductCard />,
                loader: () => fetch("../products.json")
            },
            {
                path: "statistics",
                element: <Statistics />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/reviwe",
                element: <Review />
            },

        ]
    }
]);

export default router;