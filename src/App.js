import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Components/Routs/Router';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
