import "./index.css";
import About from "./components/about";
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
import cantonese from "/assets/cantonese.jpeg";

export default function App() {
  return (
    <>
      <Notice />

      <Layout title="Happy Panda" status="closed">
        <Header buttonLabel="Make a reservation" buttonNumber="test" />
        <About />
        <Gallery>
          <Picture title="Example image" src={strawberries} caption="test" />
          <Picture title="Example image" src={cantonese} caption="test" />
          <Picture title="Example image" src={strawberries} caption="test" />
          <Picture title="Example image" src={cantonese} caption="test" />
        </Gallery>
        <Quote
          quote="But look closer, and you’ll find this is no run-of-the-mill regional takeaway. Not so much lemon chicken as stir-fried lamb’s tripe with coriander and Dongpo-style pig shoulder."
          author="Tom Parker Bowles, on Kungfu Kitchen"
        />
        <Menus />
        <Footer />
      </Layout>
    </>
  );
}
