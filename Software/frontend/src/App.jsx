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
        path: "/products",
        element: <ProductsPage/>
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
  }
])
function App() {

  return (
    <RouterProvider router={router}/>
      
  )
}

export default App
