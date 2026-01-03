import Header from "./components/Header";
import Home from "./components/Home";
import Service from "./components/Service";
import Process from "./components/Process";
import Casestudies from "./components/Casestudies";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ActionCenter from "./components/ActionCenter";
import { useState } from "react";

const App = () => {

  const [isActionOpen, setIsActionOpen] = useState(false);
  const openActionCenter = () => setIsActionOpen(true);
  const closeActionCenter = () => setIsActionOpen(false);

  return (
    <>
      <Header />
      <Home />
      <section id="services">
        <Service />
      </section>
      <section id="work">
        <Process />
      </section>
      <section id="about">
        <Casestudies />
      </section>
      <section id="contact">
        <CTA onCtaClick={openActionCenter} />
      </section>
      <ActionCenter isOpen={isActionOpen} onClose={closeActionCenter} />
      <Footer onCtaClick={openActionCenter} />
    </>
  );
};

export default App;
