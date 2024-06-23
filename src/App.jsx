import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Firstsection from "./components/Firstsection";
import Secondsection from "./components/Secondsection";
import Thirdsection from "./components/Thirdsection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Firstsection />
      <Secondsection />
      <Thirdsection />
      <Footer/>
    </div>
  );
}

export default App;
