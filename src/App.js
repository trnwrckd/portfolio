import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home/Home';
import NotFound from './Components/Pages/NotFound/NotFound';
import ProjectDetails from './Components/Pages/ProjectDetails/ProjectDetails';
import Blogs from './Components/Pages/Blogs/Blogs';
import { useEffect } from 'react';
import Aos from 'aos';

function App() {

  useEffect(() => {
    Aos.init()
  },[])

  return (
    <div className="App" data-aos="fade-in" data-aos-duration = "500">
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<Home/>}/>
          <Route path = 'home' element={<Home/>}/>
          <Route path = 'blogs' element={<Blogs/>}/>
          <Route path='*' element={<NotFound />} />
          <Route path = ':id' element={<ProjectDetails/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
