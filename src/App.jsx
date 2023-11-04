import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Nav } from "./components";
import { Footer } from "./sections";


const Dashboard = () => {
  return (<div>
    <Nav />
    <Outlet />
    <Footer />
  </div>
  )
}


const router = createBrowserRouter([
  {
      path: "/",
      element: <Dashboard />,
      children: [
          {
              path: "/",
              element: <Home />,
          },
      ],
  },
  {
      path: "/contact",
      element: <Contact />,
  },
  {
      path: "*",
      element: <div>404</div>,
  },
]);

const App = () => {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
};

export default App;
