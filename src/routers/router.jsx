import {createBrowserRouter} from "react-router";
import App from "../App";
import Search from "../pages/Search";
import Home from "../pages/Home";
import Result from "../pages/Result";
import Read from "../pages/Read";
import NoPage from "../pages/NoPage";
import NotFound from "../pages/NotFound";
import About from "../pages/About"
import Login from "../components/Login";
import Register from "../components/Register";

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
                path: "/rd/:id/:i",
                element: <Read />
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
            },
            {
                path:"/login",
                element: <Login />
            },
            {
                path:"/register",
                element: <Register />
            }
        ]
    }
]);

export default router;