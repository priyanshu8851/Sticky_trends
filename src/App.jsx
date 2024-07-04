import React from "react";
import Header from "./components/header/Header";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Pages/Home";
import Sticker from "./Pages/Sticker";
import TopButton from "./components/TopButton/TopButton";
import Footer from "./components/footer/Footer";
import Custom from "./components/custom/Custom";

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/stickers" element={<Sticker/>} />
          <Route path="/*" element={<h1>404: page not found </h1>} />
        </Routes>
        <Custom/>
        <Footer/>
        <TopButton/>
      </Router>
    </>
  );
};

export default App;
