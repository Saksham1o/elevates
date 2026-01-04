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
    <div className="overflow-x-hidden">
      <Header />
      <Home />

      <section id="services" className="scroll-mt-24">
        <Service />
      </section>

      <section id="work" className="scroll-mt-24">
        <Process />
      </section>

      <section id="about" className="scroll-mt-24">
        <Casestudies />
      </section>

      <section id="contact" className="scroll-mt-24">
        <CTA onCtaClick={openActionCenter} />
      </section>

      <ActionCenter isOpen={isActionOpen} onClose={closeActionCenter} />
      <Footer onCtaClick={openActionCenter} />
    </div>
  );
};

export default App;
