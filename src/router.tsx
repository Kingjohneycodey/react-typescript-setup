// src/routes.js
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./components/layouts/HomeLayout";
import NotFound from "./pages/general/NotFound";
import Login from "./pages/auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: "login", element: <Login /> },
    ],
  },

  {
    path: "/*",
    element: <NotFound />,
  },

  // {
  //   path: "/dashboard",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "home",
  //       element: <DashboardHome />,
  //     },
  //   ],
  // },
]);

export default router;
