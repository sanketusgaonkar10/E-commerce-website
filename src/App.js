import './App.css';
import Signup from './features/auth/components/Signup';
import ProductList from './features/product/components/ProductList';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import ProductDetailPage from './pages/ProductDetailPage';


import{
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Checkout from './pages/Checkout';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage/>
    
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element: <Checkout></Checkout>,
  },
  {
    path: "/product-detail",
    element: <ProductDetailPage/>,
  },
]);


function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />

     
    </div>
  );
}

export default App;
