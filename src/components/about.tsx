import Link from "../atoms/link";
import strawberries from "/assets/strawberries.webp";
import GettingHere from "./getting-here";

export default function About() {
  return (
    <section className="margin flex flex-col gap-x-8 gap-y-4 py-8 bg-blue">
      <div className=" grid md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <p className="subheading mb-2 md:leading-[1.2] leading-[1.4]">
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
