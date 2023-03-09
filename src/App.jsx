import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {  Footer, Navbar } from "./components"
import { About, Contact, Work } from "./pages"
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/PaytonPortfolio" element={<About />} />
          <Route path="/PaytonPortfolio/work" element={<Work />} />
          <Route path="/PaytonPortfolio/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
