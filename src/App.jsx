import { useAppContext } from "./store/AppContext.jsx";
import Cards from "./sections/Cards.jsx";
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import DivLine from "./components/DivLine.jsx";
import About from "./sections/About.jsx";
import Footer from "./sections/Footer.jsx";
import Main from "./sections/Main.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { Routes, Route } from "react-router-dom";
import CardGaza from "./pages/CardGaza.jsx";
import CardDetail1 from "./pages/CardDetail1.jsx";
import CardDetail2 from "./pages/CardDetail2.jsx";
import CardDetail3 from "./pages/CardDetail3.jsx";
import CardDetail4 from "./pages/CardDetail4.jsx";
import CardDetail5 from "./pages/CardDetail5.jsx";
import CardDetail6 from "./pages/CardDetail6.jsx";
import CardDetail7 from "./pages/CardDetail7.jsx";
import CardDetail8 from "./pages/CardDetail8.jsx";
import CardDetail9 from "./pages/CardDetail9.jsx";
import CardDetail10 from "./pages/CardDetail10.jsx";
import CardDetail11 from "./pages/CardDetail11.jsx";
import CardDetail12 from "./pages/CardDetail12.jsx";

function App() {
  const { mode } = useAppContext();

  return (
    <div
      className={`${
        mode
          ? "selection:bg-[#000000c2] selection:text-[#ffffffc2]"
          : "selection:bg-[#ffffffc2] selection:text-[#000000c2]"
      } `}
    >
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <DivLine />
              <Main />
              <DivLine />
              <Cards />
              <DivLine />
              <About />
              <DivLine />
              <Footer />
            </>
          }
        />
        <Route path="/cards/gaza" element={<CardGaza />} />
        <Route path="/cards/detail1" element={<CardDetail1 />} />
        <Route path="/cards/detail2" element={<CardDetail2 />} />
        <Route path="/cards/detail3" element={<CardDetail3 />} />
        <Route path="/cards/detail4" element={<CardDetail4 />} />
        <Route path="/cards/detail5" element={<CardDetail5 />} />
        <Route path="/cards/detail6" element={<CardDetail6 />} />
        <Route path="/cards/detail7" element={<CardDetail7 />} />
        <Route path="/cards/detail8" element={<CardDetail8 />} />
        <Route path="/cards/detail9" element={<CardDetail9 />} />
        <Route path="/cards/detail10" element={<CardDetail10 />} />
        <Route path="/cards/detail11" element={<CardDetail11 />} />
        <Route path="/cards/detail12" element={<CardDetail12 />} />
      </Routes>
    </div>
  );
}

export default App;
