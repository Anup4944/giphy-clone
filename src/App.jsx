import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Categories from "./pages/Categories";
import Single from "./pages/Single";
import Search from "./pages/Search";
import GifProvider from "./context/GifContext";

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
  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>
  );
}

export default App;
