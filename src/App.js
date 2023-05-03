import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navigation from "./common/nav/nav";
import Footer from "./common/footer/footer";
import Home from "./home/home";
import About from "./about/About";
import Work from "./work/work";
import Contact from "./contact/contact";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
