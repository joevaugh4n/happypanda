import Button from "../atoms/button";
import cafeMenu from "/assets/cafe.pdf";

export default function Menus() {
  return (
    <div className="mt-4">
      <h2 className="margin">Menus</h2>

      <section className="grid sm:grid-cols-2 gap-8 py-8 border-slate-100 bg-blue margin">
        <Button link={cafeMenu} caption="Brunch" />
        <Button link={cafeMenu} caption="Cantonese" />
      </section>
    </div>
  );
}
