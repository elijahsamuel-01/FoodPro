import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "../pages/home/LandingPage";
import Layout from "../components/static/Layout";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      // {
      //   path: "register",
      //   index: true,
      //   element: <Register />,
      // },
      // {
      //   path: "login",
      //   index: true,
      //   element: <Login />,
      // },
      // {
      //   path: "verify",
      //   index: true,
      //   element: <Verify />,
      // },
      // {
      //   path: "account-created",
      //   index: true,
      //   element: (
      //     <Congrate title="Your account has been created please to to your email for verification of your account" />
      //   ),
      // },
      // {
      //   path: "account-verified",
      //   index: true,
      //   element: (
      //     <Congrate title="Your account has been verified... you can now continue" />
      //   ),
      // },
    ],
  },
  // {
  //   path: "/",
  //   element: (
  //     <PrivateRouter>
  //       <DirectaryRoute />
  //     </PrivateRouter>
  //   ),
  // },
]);
