import "./index.css";
import About from "./components/about";
import Cuisine from "./components/cuisines";
import Gallery from "./components/gallery";
import Layout from "./components/layout";
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
        telephone={telephone}
        title="Kungfu Cantonese"
        email={email}
        address={address}
      >
        <Notice />
        <About
          openOn="Open everyday but Tuesday"
          telephone={telephone}
          email={email}
          address={address}
        />
        <Cuisine />
        <Gallery>
          <Picture title="Dumplings at Kungfu Cantonese" src={cake} />
          <Picture title="Vegan mock beef at Kungfu Cantonese" src={mockbeef} />
          <Picture
            title="A meat and crab dish at Kungfu Cantonese"
            src={meat}
          />
          <Picture title="Breakfast at Kungfu Cantonese" src={strawberries} />
        </Gallery>
        <Quote
          quote="But look closer, and you’ll find this is no run-of-the-mill regional takeaway. Not so much lemon chicken as stir-fried lamb’s tripe with coriander and Dongpo-style pig shoulder."
          author="Tom Parker Bowles"
          source="The Telegraph"
        />
        <Quote
          quote="We came for our staff party and had the best time. Wonderful, tasty and unique, the hospitality was off the charts. Cannot recommend enough or wait to go back."
          author="Tim Hooper (Milk, Reading)"
        />
      </Layout>
    </>
  );
}

function MenusPage() {
  return (
    <Layout title="Menus" telephone={telephone} email={email} address={address}>
      <h1 className="text-black">Menus</h1>
    </Layout>
  );
}

function NotFound() {
  return (
    <Layout title="Menus" telephone={telephone} email={email} address={address}>
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
