import "./index.css";
import About from "./components/about";
import Advert from "./components/advert";
import Gallery from "./components/gallery";
import Layout from "./components/layout";
import Menus from "./components/Menus";
import Notice from "./components/notice";
import Picture from "./atoms/image";
import Quote from "./components/quote";
import { HashRouter, Route, Routes } from "react-router";
// image imports
import strawberries from "/assets/strawberries.webp";
import cake from "/assets/cake.png";
import mockbeef from "/assets/vegan-beef.webp";
import meat from "/assets/meat.webp";

const telephone = `07884784688`;
const email = "info@happypandareading.co.uk";
const address = "80 Christchurch Road, Reading, RG2 7AZ";

function Index() {
  return (
    <>
      <Layout
        logoSize="large"
        telephone={telephone}
        title="Happy Panda"
        email={email}
        address={address}
      >
        <Notice />
        <About
          openOn="Open every day but Tuesday"
          telephone={telephone}
          email={email}
          address={address}
        />
        <Advert title="Spring festival" />
        <Gallery>
          <Picture title="Breakfast at Happy Panda" src={strawberries} />
          <Picture title="Dumplings at Happy Panda" src={cake} />
          <Picture title="Vegan mock beef at Happy Panda" src={mockbeef} />
          <Picture title="A meat and crab dish at Happy Panda" src={meat} />
        </Gallery>
        <Quote
          quote="But look closer, and you’ll find this is no run-of-the-mill regional takeaway. Not so much lemon chicken as stir-fried lamb’s tripe with coriander and Dongpo-style pig shoulder."
          author="Tom Parker Bowles"
          source="The Telegraph"
        />
        <Menus title />
      </Layout>
    </>
  );
}

function MenusPage() {
  return (
    <Layout
      title="Menus"
      logoSize="small"
      telephone={telephone}
      email={email}
      address={address}
    >
      <h1 className="text-black">Menus</h1>
      <Menus />
    </Layout>
  );
}

function NotFound() {
  return (
    <Layout
      title="Menus"
      logoSize="small"
      telephone={telephone}
      email={email}
      address={address}
    >
      <h1 className="text-black">Page not found</h1>
      <a href="/">Return to homepage</a>
    </Layout>
  );
}

export default function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/menus" element={<MenusPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}
