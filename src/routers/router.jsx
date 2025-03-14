import {createBrowserRouter} from "react-router";
import App from "../App";
import Search from "../pages/Search";
import Home from "../pages/Home";
import Result from "../pages/Result";
import NoPage from "../pages/NoPage";
import NotFound from "../pages/NotFound";
import About from "../pages/About"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/search",
                element: <Search />,
            },
            {
                path: "/r/:id",
                element: <Result />
            },
            {
                path:"/*",
                element: <NoPage />
            },
            {
                path:"/notfound",
                element: <NotFound />
            },
            {
                path:"/about",
                element: <About />
            }
        ]
    }
]);

export default router;