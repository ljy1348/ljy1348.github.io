import React, { useEffect } from 'react';
import './App.css';
import './assets/css/style.css';
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import 'aos/dist/aos.css';
// import 'swiper/swiper.css';
// import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'glightbox/dist/css/glightbox.css';
import initMain from './assets/js/main';

function App() {

  useEffect(()=>{
    initMain();
  },[])

  return (
    <div>
      {/* 머릿말 */}
      <Nav/>

      {/* 메인 */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>

      {/* <Home/> */}

      {/* 꼬릿말 */}
      <Footer/>
    </div>
  );
}

export default App;
