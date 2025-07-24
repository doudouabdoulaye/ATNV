// src/App.tsx
// REMOVED: import React from 'react';
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import MainLayout from './Layouts/MainLayouts';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/contact';
import CentreMartin from './Pages/centreMartin';
import NosActions from './Pages/NosActions';
import Blog from './Pages/Blog';


function App() {
  return (
  <>  
  <BrowserRouter>
  <Routes>
   <Route path="/" element={<MainLayout/>}>
   <Route index element={<Home/>}/>
   <Route path="/AboutUs" element={<AboutUs/>}/>
    <Route path="/NosActions" element={<NosActions/>}/> {/* Adding the NosServices route */}
    <Route path="/contact" element={<Contact/>}/>
    <Route path='/centreMartin' element={<CentreMartin/>}/> 
    <Route path="/Blog" element={<Blog/>}/>  
   </Route>
  </Routes>
  </BrowserRouter>
  </>
  );

}
export default App;