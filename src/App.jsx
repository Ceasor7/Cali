import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Nav } from "./components";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
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
