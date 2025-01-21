import GettingHere from "./getting-here";
import Link from "../atoms/link";

/** The about section. Contains title, text, the Getting Here component, and a slot for one image */
export default function About() {
  return (
    <section className="margin flex flex-col gap-x-8 gap-y-4 py-8 bg-blue border border-slate-100">
      <div className="flex flex-col gap-4">
        <p>
          Delicious English and Chinese breakfasts, Dim Sum, authentic Cantonese
          cuisine, hot pot, and BBQ, from the team behind&nbsp;
          <Link caption="Kungfu Kitchen" target="https://kungfureading.co.uk" />
          .
        </p>
        <GettingHere />
      </div>
    </section>
  );
}
