import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/Layout/Layout";
import Vote from "../pages/Vote";
import Login from "../pages/LoginPage";
import Rgister from "../pages/RgisterPage";
import Statistics from "../pages/Statistics";
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
      path: "/Statistics", element: <Layout> <Statistics/> </Layout>,
    },
    {
      path: "/vote", element: <Layout> <Vote/> </Layout>,
    },
  ]);
  export default router