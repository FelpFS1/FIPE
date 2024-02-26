import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "../pages/Home";
import Querys from "../pages/Querys";

const AppRouter =() => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/querys' element={<Querys/>}/>
      </Routes>
    </BrowserRouter>
  );
export default AppRouter