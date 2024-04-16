import { RouterProvider, createBrowserRouter } from 'react-router-dom'
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
        path : "/search/:query",
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
    path: "/sign-up",
    element: <SignUp />
  },
  {
    path: "/sign-in",
    element: <SignIn />
  },
  {
    path: "admin",
    element: <Admin/>
  }
])
function App() {

  return (
    <RouterProvider router={router} />

  )
}

export default App
