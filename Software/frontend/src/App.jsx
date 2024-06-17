import { RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import CartPage from './pages/Cart/CartPage'
import ProfilePage from './pages/Profile/ProfilePage'
import ProfileDetail from './pages/Profile/ProfileDetail/ProfileDetail'
import Orders from './pages/Profile/Orders/Orders'
import Purchase from './pages/Profile/Purchase/Purchase'
import Notifications from './pages/Profile/Notifications/Notifications'
import ProfileEdit from './pages/Profile/ProfileEdit/ProfileEdit'
import Password from './pages/Profile/Password/Password'
import ProductsPage from './pages/Products/ProductsPage'
import AboutUs from './pages/AboutUs/AboutUs'
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
import Admin from './pages/Admin/Admin'
import SignLayout from './pages/Layout/SignLayout'
import Checkout from './pages/CheckOut/Checkout'
import { ToastContainer } from 'react-toastify'
import { useState, useEffect, useContext } from 'react'
import { GlobalContext } from './context/AppContext'
import ListTable from "./components/Admin/ListTable/ListTable.jsx";
import UpdateProduct from "./components/Admin/UpdateProduct/UpdateProduct.jsx";
import DeleteProduct from "./components/Admin/DeleteProduct/DeleteProduct.jsx";
import Dash from "./components/Admin/Dashboard/Dash.jsx";
import NewProductForm from "./components/Admin/NewProductForm/NewProductForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/category/:category/:query/:page",
        element: <ProductsPage />
      },
      {
        path: "/category/:category/:query",
        element: <ProductsPage />
      },
      {
        path: "/search/:query",
        element: <ProductsPage />
      },
      {
        path: "/about-us",
        element: <AboutUs />
      },
      {
        path: "/cart",
        element: <CartPage />
      },
      {
        path: "/checkout",
        element: <Checkout />
      },
      {
        path: '/product/:id',
        element: <ProductDetail />
      },
      {
        path: "/member",
        element: <ProfilePage />,
        children: [
          {
            path: 'details',
            element: <ProfileDetail />
          },
          {
            path: 'orders',
            element: <Orders />
          },
          {
            path: 'purchase',
            element: <Purchase />
          },
          {
            path: 'notifications',
            element: <Notifications />
          },
          {
            path: 'edit',
            element: <ProfileEdit />
          },
          {
            path: 'password-edit',
            element: <Password />
          }
        ]
      }
    ]
  },
  {
    element: <SignLayout />,
    children: [
      {
        path: "/sign-up",
        element: <SignUp />
      },
      {
        path: "/sign-in",
        element: <SignIn />
      }
    ]
  },
  {
    path: "admin/*",
    element: <Admin />,
    children: [
        {
          path: "",
          element: <Dash />

      },
      {
        path: "createProduct",
        element: <NewProductForm />
      },
      {
        path: "store",
        element: <ListTable />
      },
      {
        path: "updateProduct",
        element: <UpdateProduct />
      },{
        path: "deleteProduct",
        element: <DeleteProduct />
      }

    ]
  }
])

function App() {
  useEffect(() => {
    checkIsLogIn();
    if(isLogIn)  {
       getUserCart();
      console.log('here');
    }
  }, [location]);
  const {isLogIn, checkIsLogIn, getUserCart} = useContext(GlobalContext);

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
      <ToastContainer />
    </>
  )
}

export default App
