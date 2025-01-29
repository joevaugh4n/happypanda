import Button from "../atoms/button";
import cafeMenu from "/menus/cafe.pdf";
import brunch from "/menus/classics.pdf";

interface Props {
  title?: boolean;
}
export default function Menus({ title }: Props) {
  return (
    <div>
      {title && <h2 className="mb-2">Menus</h2>}
      <section className="md:flex grid gap-x-8 gap-y-4 py-8 border-slate-100 bg-blue mx-auto justify-center">
        <Button full link={cafeMenu} caption="Cantonese/Dim Sum Menu" />
        <Button full link={brunch} caption="Chinese & English brunch" />
      </section>
    </div>
  );
}
