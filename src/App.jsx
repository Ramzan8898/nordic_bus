import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Fleets from "./pages/Fleets";
import Services from "./pages/Services";
export default function App() {
  return (
    <Routes>

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fleets" element={<Fleets />} />
        <Route path="/services" element={<Services />} />
      </Route>
    </Routes>
  );
}
