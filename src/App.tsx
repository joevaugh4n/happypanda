import About from "./components/about";
import Footer from "./components/footer";
import Menus from "./components/Menus";
import Header from "./components/header";
import Notice from "./components/notice";
import Quote from "./components/quote";
import Picture from "./atoms/image";
import strawberries from "/assets/strawberries.webp";
import kfk from "/assets/kfk.jpg";
import cantonese from "/assets/cantonese.jpeg";

export default function App() {
  return (
    <>
      <Notice />

      <div className="flex flex-col bg-white">
        <Header />
        <About image={kfk} />
        <div className="grid sm:grid-cols-2 py-8 gap-8 margin items-end">
          <Picture title="Example image" src={strawberries} />
          <Picture title="Example image" src={cantonese} />
          <div className="sm:col-span-2">
            <Quote
              quote="But look closer, and you’ll find this is no run-of-the-mill regional takeaway. Not so much lemon chicken as stir-fried lamb’s tripe with coriander and Dongpo-style pig shoulder."
              author="Tom Parker Bowles, on Kungfu Kitchen"
            />
          </div>
        </div>
        <Menus />
        <Footer />
      </div>
    </>
  );
}
