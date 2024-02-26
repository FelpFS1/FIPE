import { Route,HashRouter as Router, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Querys from "./pages/Querys";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/querys" element={<Querys />} />
      </Routes>
    </Router>
  );
}

export default App
