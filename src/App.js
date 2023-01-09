import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <Main />, children: [
        { path: '/home', element: <Home /> },


        { index: true, element: <Home /> }


      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
