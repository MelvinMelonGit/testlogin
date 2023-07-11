import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route
} from 'react-router-dom'

//layouts
import RootLayout from '../layouts/RootLayout'

//pages
import Home from '../pages/Home'
import Login from '../pages/Login'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />}/>
    </Route>
    )
)
