import React from 'react';
import Home from './page/Home';
import {BrowserRouter, Routes , Route } from 'react-router-dom';
import PlaceToStay from './page/PlaceToStay';

function App(){
return(
    <BrowserRouter>
     <section className=''>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/placetostay" element={<PlaceToStay/>} />
    </Routes>
    </section>
    </BrowserRouter>
   
)

}

export default App;