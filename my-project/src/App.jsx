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
import Login from './pages/Login'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />}/>
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
