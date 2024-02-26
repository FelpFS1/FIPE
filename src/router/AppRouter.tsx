import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "../pages/Home";
import Querys from "../pages/Querys";
import { AnimatePresence } from 'framer-motion';

const AppRouter = () => (
  <AnimatePresence mode='wait'>
  <BrowserRouter>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/querys' element={<Querys />} />
      </Routes>
   
  </BrowserRouter>
  </AnimatePresence>

);
export default AppRouter