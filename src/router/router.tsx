import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Querys from "../pages/Querys";

const router = (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/querys" element={<Querys />} />
      </Routes>
    </HashRouter>
  );
export default router