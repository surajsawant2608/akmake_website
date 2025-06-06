import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import RnD from "./pages/RnD";
import Careers from "./pages/Careers";
import PrivacyPolicies from "./pages/PrivacyPolicies";
import ContactUs from "./pages/ContactUs";
import LinerOpener from "./pages/products/LinerOpener";
import FIBCBagCleaning from "./pages/products/FIBCBagCleaning";
import BafflePunching from "./pages/products/BafflePunching";
import HydraulicBalePress from "./pages/products/HydraulicBalePress";
import BeltCutting from "./pages/products/BeltCutting";
import AutoForming from "./pages/products/AutoFormFit";
import JumboBag from "./pages/products/JumboBagFabricCutting";
import JumboBag2200 from "./pages/products/JumboBagFabricCutting2200";
import JumboBagWithBaffle from "./pages/products/JumboBagFabricWithBaffle";

// import Background from "./components/Background";

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
            <Route path="/products/liner-opener-machine" element={<LinerOpener />} />
            <Route path="/products/fibc-bag-cleaning" element={<FIBCBagCleaning />} />
            <Route path="/products/fibc-baffle-punch-machine" element={<BafflePunching />} />
            <Route path="/products/hydaulic-bale-press" element={<HydraulicBalePress />} />
            <Route path="/products/fibc-belt-cutting" element={<BeltCutting />} />
            <Route path="/products/auto-form-fit-machine" element={<AutoForming />} />
            <Route path="/products/jumbo-bag-fabric-cutting" element={<JumboBag />} />
            <Route path="/products/jumbo-bag-fabric-cutting-2200" element={<JumboBag2200 />} />
            <Route path="/products/jumbo-bag-fabric-with-baffle" element={<JumboBagWithBaffle />} />
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
