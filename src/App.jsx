import Header from "./components/Header";
import Home from "./components/Home";
import Service from "./components/Service";
import Process from "./components/Process";
import Casestudies from "./components/Casestudies";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ActionCenter from "./components/ActionCenter";
import ChatAssistant from "./components/ChatAssistant";
import { useState } from "react";

const App = () => {
  const [isActionOpen, setIsActionOpen] = useState(false);
  const openActionCenter = () => setIsActionOpen(true);
  const closeActionCenter = () => setIsActionOpen(false);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 selection:bg-[#B8A8FF]/30 overflow-x-hidden">
      <Header onCtaClick={openActionCenter} />
      <Home onCtaClick={openActionCenter} />

      <section id="services" className="scroll-mt-24">
        <Service />
      </section>

      <section id="work" className="scroll-mt-24">
        <Process onCtaClick={openActionCenter} />
      </section>

      <section id="about" className="scroll-mt-24">
        <Casestudies />
      </section>

      <section id="contact" className="scroll-mt-24">
        <CTA onCtaClick={openActionCenter} />
      </section>

      <ActionCenter isOpen={isActionOpen} onClose={closeActionCenter} />
      <Footer onCtaClick={openActionCenter} />
      <ChatAssistant />
    </div>
  );
};

export default App;
