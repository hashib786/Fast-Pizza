import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu from "./features/menu/Menu";
import { menuLoader } from "./features/menu/menuLoader";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import { orderCreateAction } from "./features/order/orderCreateAction";
import Order from "./features/order/Order";
import { orderLoader } from "./features/order/orderLoader";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: orderCreateAction,
      },
      { path: "/order/:orderId", element: <Order />, loader: orderLoader },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
