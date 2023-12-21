import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import { Nav } from "./components";
import { Footer } from "./sections";

function App() {
  return (
    <div>
        <Router>
          <Nav />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
