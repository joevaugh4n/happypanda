import "./index.css";
import ReactGA from "react-ga4";
import About from "./components/about";
import Advert from "./components/advert";
import Button from "./atoms/button";
import CookieConsent from "react-cookie-consent";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Header from "./components/header";
import Layout from "./components/layout";
import Menus from "./components/Menus";
import Notice from "./components/notice";
import Picture from "./atoms/image";
import Quote from "./components/quote";
// image imports
import strawberries from "/assets/strawberries.webp";
import cake from "/assets/cake.png";
import mockbeef from "/assets/vegan-beef.webp";
import meat from "/assets/meat.webp";

export default function App() {
  const telephone = `07884784688`;
  const email = "info@happypandareading.co.uk";
  const address = "80 Christchurch Road, Reading, RG2 7AZ";

  const handleGAInitialization = () => {
    ReactGA.initialize("G-WMKZB2M77W");
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  };

  return (
    <>
      <CookieConsent
        flipButtons
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        enableDeclineButton
        style={{ background: "#2B373B" }}
        onAccept={handleGAInitialization}
        onDecline={() => console.log("User declined cookies.")}
        expires={60}
      >
        🐼 We use (fortune) cookies to enhance our user experience.
      </CookieConsent>
      <Notice />
      <Layout title="Happy Panda">
        <Button absolute caption="Call Happy Panda" link={`tel:${telephone}`} />
        <Header />
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
        <Menus />
        <Footer telephone={telephone} email={email} address={address} />
      </Layout>
    </>
  );
}
