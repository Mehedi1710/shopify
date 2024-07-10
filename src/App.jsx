import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import RoutePage from "./Pages/RoutePage";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RoutePage/>,
      children: [
        {
          path: "",
          element: <Shop />,
        },
        {
          path: "mens",
          element: <ShopCategory banner={men_banner} category='men'/>,
        },
        {
          path: "womens",
          element: <ShopCategory banner={women_banner} category='women'/>,
        },
        {
          path: "kids",
          element: <ShopCategory banner={kid_banner} category='kid'/>,
        },
        {
          path: "login",
          element: <LoginSignup/>,
        },
        {
          path: "/product",
          element: <Product/>,
          children: [
            {
              path: ":productId",
              element: <Product/>
            }
          ]
        },
      ],
    },
    {
      path: "/cart",
      element: <Cart/>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
