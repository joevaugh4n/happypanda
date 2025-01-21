import Button from "../atoms/button";
import cafeMenu from "/assets/cafe.pdf";

export default function Menus() {
  return (
    <div>
      <h2 className="margin mb-2">Menus</h2>
      <section className="flex gap-8 py-8 border-slate-100 bg-blue margin">
        <Button link={cafeMenu} caption="Cantonese Menu" />
      </section>
    </div>
  );
}
