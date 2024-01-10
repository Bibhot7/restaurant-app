import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Success from "./Pages/Success";

import Admin from "./Pages/Admin";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/admin" element={<Admin />} />
      
        
        
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;
