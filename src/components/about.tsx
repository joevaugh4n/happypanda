import GettingHere from "./getting-here";
import { ReactNode } from "react";

interface Props {
  image: string;
  children: ReactNode;
}

/** The about section. Contains title, text, the Getting Here component, and a slot for one image */
export default function About({ image, children }: Props) {
  return (
    <section className="margin flex flex-col gap-x-8 gap-y-4 py-8 bg-blue border border-slate-100">
      <div className=" grid md:grid-cols-2 gap-8">
        <div className="flex flex-col md:gap-4 gap-6">
          <p className="text-xl md:text-balance text-pretty font-medium">
            {children}
          </p>
          <GettingHere />
        </div>
        <img src={image} alt="Dish" className="rounded" />
      </div>
    </section>
  );
}
