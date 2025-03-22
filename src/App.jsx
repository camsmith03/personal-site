import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation.jsx";
import Home from "./components/home.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";
import PageRedirect from "./components/pageredirect.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageRedirect />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
