import React from "react";
import Banner from "./components/Banner";
import Container from "./components/Container";
import "./App.css";


const App = () => (
  <div className="container-fluid mainContainer">
    <Banner />
    <Container /> 
  </div>
);

export default App;