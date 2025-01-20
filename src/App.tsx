import About from "./components/about";
import Footer from "./components/footer";
import Menus from "./components/Menus";
import Header from "./components/header";
import Layout from "./components/layout";
import Link from "./atoms/link";
import Notice from "./components/notice";
import Quote from "./components/quote";
import Picture from "./atoms/image";
import "./index.css";
// image imports
import strawberries from "/assets/strawberries.webp";
import kfk from "/assets/kfk.jpg";
import cantonese from "/assets/cantonese.jpeg";

export default function App() {
  return (
    <>
      <Notice />

      <Layout status="closed">
        <Header buttonLabel="Make a reservation" buttonNumber="test" />
        <About image={kfk}>
          <h2>
            Delicious English and Chinese breakfasts, Dim Sum, authentic
            Cantonese cuisine, hot pot, and BBQ, by&nbsp;
            <Link
              caption="Kungfu Kitchen"
              target="https://kungfureading.co.uk"
            />
            .
          </h2>
        </About>
        <div className="grid sm:grid-cols-2 gap-8 margin items-end">
          <Picture title="Example image" src={strawberries} />
          <Picture title="Example image" src={cantonese} />
        </div>
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
