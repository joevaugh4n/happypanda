import GettingHere from "./getting-here";
import Link from "../atoms/link";

interface Props {
  telephone: string;
  email: string;
  address: string;
  openOn: string;
}

/** The about section. Contains title, text, the Getting Here component, and a slot for one image */
export default function About({ telephone, email, address, openOn }: Props) {
  return (
    <section className="flex flex-col gap-x-8 gap-y-4 px-4 py-8 bg-blue border border-slate-100">
      <section className="flex flex-col gap-4 mx-auto margin">
        <h2 className="hidden">Welcome to Happy Panda</h2>
        <p className="text-pretty text-lg">
          Delicious Cantonese cuisine and dim sum, hot pot, barbecue, and
          Chinese and English breakfasts from the team behind&nbsp;
          <Link caption="Kungfu Kitchen" target="https://kungfureading.co.uk" />
          .
        </p>
        <GettingHere
          openOn={openOn}
          address={address}
          telephone={telephone}
          email={email}
        />
      </section>
    </section>
  );
}
