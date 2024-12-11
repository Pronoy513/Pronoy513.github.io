import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Project from "./sections/Project";
import ProjectSimple from "./sections/ProjectSimple";
import FireFly from "./components/FireFly";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <FireFly />
      <Hero />
      <About />
      <Project />
      {/* <ProjectSimple /> */}
      <Contact />
      <Footer />
    </main>

  );
};

export default App;