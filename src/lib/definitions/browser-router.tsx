import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/pages/Home";
import Editor from "../../components/pages/editor";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "editor",
        element: <Editor />,
    },
]);


export default router