import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Categories from "./pages/Categories";
import Single from "./pages/Single";
import Search from "./pages/Search";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/favourites",
        element: <Favourites />,
      },
      {
        path: "/:category",
        element: <Categories />,
      },
      {
        path: "/:type/:slug",
        element: <Single />,
      },
      {
        path: "/search/:query",
        element: <Search />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
