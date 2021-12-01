import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home/Home';
import NotFound from './Components/Pages/NotFound/NotFound';
import ProjectDetails from './Components/Pages/ProjectDetails/ProjectDetails';
import Blogs from './Components/Pages/Blogs/Blogs';
import SlideShow from './Components/Pages/SlideShow/SlideShow';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<Home/>}/>
          <Route path = 'home' element={<Home/>}/>
          <Route path = 'blogs' element={<Blogs/>}/>
          <Route path = 'slideshow' element={<SlideShow/>}/>
          <Route path='*' element={<NotFound />} />
          <Route path = ':id' element={<ProjectDetails/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
