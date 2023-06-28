// import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard/index";
import Login from "./components/Login/index";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    // {
    //   path: "/result",
    //   element: <Result />,
    // },
    // {
    //   path: "/detail/:id",
    //   element: <Detail />,
    // },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
