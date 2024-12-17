import About from "./components/about";
import Footer from "./components/footer";
import GettingHere from "./components/getting-here";
import ImageGallery from "./components/imageGallery";
import Header from "./components/header";
import Notice from "./components/notice";
import Quote from "./components/quote";

export default function App() {
  return (
    <>
      <Notice />

      <div className="flex flex-col bg-white">
        <Header />
        <About />
        <Quote
          quote="But look closer, and you’ll find this is no run-of-the-mill regional takeaway. Not so much lemon chicken as stir-fried lamb’s tripe with coriander and Dongpo-style pig shoulder."
          author="Tom Parker Bowles, on Kungfu Kitchen"
        />
        <ImageGallery />
        <Footer />
      </div>
    </>
  );
}
