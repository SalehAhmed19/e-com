import { createBrowserRouter } from "react-router";
import App from "../App";
import Categories from "../Pages/Categories/Categories";
import Products from "../Pages/Products/Products";
import Offers from "../Pages/Offers/Offers";
import Blogs from "../Pages/Blogs/Blogs";
import Contacts from "../Pages/Contacts/Contacts";
import ProductDetails from "../Pages/Products/ProductDetails";

const routes = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/categories", element: <Categories /> },
  { path: "/products", element: <Products /> },
  { path: "/products/:productId", element: <ProductDetails /> },
  { path: "/offers", element: <Offers /> },
  { path: "/blogs", element: <Blogs /> },
  { path: "/contact", element: <Contacts /> },
]);

export default routes;
