import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import RnD from "./pages/RnD";
import Careers from "./pages/Careers";
import PrivacyPolicies from "./pages/PrivacyPolicies";
import ContactUs from "./pages/ContactUs";
import Background from "./components/Background";

const App = () => {
  return (
    <Router>
      <div className="relative z-10 flex flex-col min-h-screen"> {/* Make the layout fill the screen */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/rnd" element={<RnD />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy-policies" element={<PrivacyPolicies />} />
          </Routes>
        </main>

        {/* Footer Stays at Bottom */}
        <Footer />
      </div>
    </Router>
  );
};


export default App;
