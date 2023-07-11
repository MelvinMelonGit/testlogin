import {
  RouterProvider
} from 'react-router-dom'

//routes
import { router } from './routes/Routes'

function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
