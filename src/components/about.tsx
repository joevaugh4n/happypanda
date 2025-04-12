import GettingHere from "./getting-here";

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
      <section className="flex flex-col gap-4">
        <h2>
          Specialty Cantonese cuisine, hotpot, Korean BBQ, and cooked
          breakfasts. Completely nut free. From the team behind Reading's top-rated Chinese
          restaurant, <a href="https://kungfureading.co.uk/">Kungfu Kitchen</a>.
        </h2>
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
