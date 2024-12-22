import Link from "../atoms/link";
import GettingHere from "./getting-here";

interface Props {
  image: string;
}

export default function About({ image }: Props) {
  return (
    <section className="margin flex flex-col gap-x-8 gap-y-4 py-8 bg-blue border border-slate-100">
      <div className=" grid md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-8">
          <p className="text-xl md:text-balance text-pretty font-medium">
            Delicious English and Chinese breakfasts, Dim Sum, authentic
            Cantonese cuisine, hot pot, and BBQ, by&nbsp;<Link
              caption="Kungfu Kitchen"
              target="https://kungfureading.co.uk"
            />
            .
          </p>
          <GettingHere />
        </div>

        <img src={image} alt="Dish" className="rounded" />
      </div>
    </section>
  );
}
