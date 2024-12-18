import kfk from "/assets/kfk.jpg";
import breakfast from "/assets/breakfast.jpeg";
import cantonese from "/assets/cantonese.jpeg";
import Picture from "../atoms/image";

export default function ImageGallery() {
  return (
    <section className="grid md:grid-cols-2 gap-8 margin py-8 border-slate-100 bg-blue">
      <Picture
        title="Example image"
        src={breakfast}
        cta={{ caption: "English & Chinese breakfasts", link: "yes" }}
      />
      <Picture
        title="Example image"
        src={kfk}
        cta={{ caption: "Dim Sum", link: "yes" }}
      />
      <Picture
        title="Example image"
        src={cantonese}
        cta={{ caption: "Cantonese cuisine", link: "yes" }}
      />
      <Picture
        title="Example image"
        src={kfk}
        cta={{ caption: "Hot Pot", link: "yes" }}
      />
    </section>
  );
}
