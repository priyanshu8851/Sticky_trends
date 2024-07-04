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
      </Router>
    </>
  );
};

export default App;
