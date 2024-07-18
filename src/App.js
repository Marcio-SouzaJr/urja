import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Scroll from "./components/Scroll";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Politica from "./pages/Politica";
import ScrollToTop from "./components/ScrollToTop";
import Depoimentos from "./pages/Depoimentos";
import Tecnologias from "./pages/Tecnologias";
import Resultados from "./pages/Resultados";
import Impactos from "./pages/Impactos";
import Servicos from "./pages/Servicos";
import Portifolio from "./pages/Portifolio";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/politica-de-privacidade" element={<Politica />} />
        <Route index path="/depoimentos" element={<Depoimentos />} />
        <Route index path="/tecnologias" element={<Tecnologias />} />
        <Route index path="/resultados" element={<Resultados />} />
        <Route index path="/impactos" element={<Impactos />} />
        <Route index path="/servicos" element={<Servicos />} />
        <Route index path="/portifolio" element={<Portifolio />} />
      </Routes>
      <Contact />
      <Footer />
      {showButton && <Scroll />}
    </BrowserRouter>
  );
}

export default App;
