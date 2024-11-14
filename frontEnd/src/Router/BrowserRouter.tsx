import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/Layout/Layout";
import Idf from "../pages/Idf";
import Login from "../pages/LoginPage";
import Rgister from "../pages/RgisterPage";
import Terrorists from "../pages/Terrorists";
import MainPage from "../pages/MainPage";
const router = createBrowserRouter(
  [
    {
      path: "/", element: <Layout> <MainPage/> </Layout>,
    },
    {
      path: "/logIn", element: <Layout> <Login/> </Layout>,
    },
    {
      path: "/rgister", element: <Layout > <Rgister/> </Layout>,
    },
    {
      path: "/terrorists", element: <Layout> <Terrorists/> </Layout>,
    },
    {
      path: "/idf", element: <Layout> <Idf/> </Layout>,
    },
  ]);
  export default router