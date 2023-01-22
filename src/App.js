import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from './layout/Main/Main';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, 
    children: [
      
    ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
