import React from "react";
import { Link } from "react-router-dom";
import appStyles from "./App.module.css";
import { Hero } from "./Components/Home components/Hero";
import { Nav } from "./Components/Common components/Nav";
import { Section1 } from "./Components/Home components/Section1";
import { Section2 } from "./Components/Home components/Section2";

function App() {
  return (
    <>
    <span id={appStyles.body}>

    <header id={appStyles.header}>

       <Nav 
        navId_home={appStyles.current_link}
        />
        <Hero/>
    </header>
        <Section1/>
    <section id={appStyles.section2i}>

        <Section2/>
    </section>
        </span>
  </>
  )
}

export default App