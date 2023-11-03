import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";


const router = createBrowserRouter([
  {
      path: "/",
      element: <Home />,
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
