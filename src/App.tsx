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

      <div className='flex flex-col bg-white'> {/*Container*/}

        <Header
          title='Happy Panda'
          subheading="Brunch, dim sum, Cantonese cuisine, BBQ, & hot pot" />

        <About />

        <GettingHere />

        <Quote quote='But look closer, and you’ll find this is no run-of-the-mill regional takeaway. Not so much lemon chicken as stir-fried lamb’s tripe with coriander and Dongpo-style pig shoulder.' author='Tom Parker Bowles' />

        <ImageGallery />

        <Footer />

      </div>
    </>
  )
}