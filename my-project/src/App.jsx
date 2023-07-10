import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

//layouts
import RootLayout from './layouts/RootLayout'

//pages
import Home from './pages/Home'
import Login , { loginAction } from './pages/Login'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} action={loginAction} />
    </Route>
  )
)

function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App