import APP from './Components/Firebase/Firebase.init'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Components/Main.jsx/Main';
import Register from './Components/Register/Register';
import LogIn from './Components/LogIn/LogIn';

function App() {
  const router =createBrowserRouter([
    {
      path:"/",
      element:<Main />,
      children:[
        {
          path:"/",
          element:<Register />
        },
        {
          path:"/register",
          element:<Register />
        },
        {
          path:"/login",
          element:<LogIn />
        }
      ]
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
