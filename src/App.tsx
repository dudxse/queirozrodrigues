import { Aboutus } from "./pages/Aboutus";
import { Contact } from "./pages/Contact";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { ServicesNPartners } from "./pages/ServicesNPartners";
import { Footer } from "./components/Footer";
import { Whatsapp } from "./components/Whatsapp";

export function App() {

  return (
    <>
      <Header />
      <Home />
      <Aboutus />
      <ServicesNPartners />
      <Contact />
      <Footer />
      <Whatsapp />
    </>
  )
}