import Link from "../atoms/link";
import strawberries from "/assets/strawberries.webp";
import GettingHere from "./getting-here";

export default function About() {
  return (
    <section className="margin flex flex-col gap-x-8 gap-y-4 py-8 bg-blue border border-slate-100">
      <div className=" grid md:grid-cols-2 gap-8">
        <div className="flex flex-col md:gap-8 gap-4">
          <p className="text-2xl text-pretty">
            Delicious English and Chinese breakfasts, dim sum, authentic
            Cantonese cuisine, hot pot, and BBQ. From the team behind{" "}
            <Link
              caption="Kungfu Kitchen"
              target="https://kungfureading.co.uk"
            />
            .
          </p>
          <GettingHere />
        </div>

        <img src={strawberries} alt="Dish" className="rounded" />
      </div>
    </section>
  );
}
