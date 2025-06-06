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
    <section className="flex flex-col gap-x-8 gap-y-4 py-8 bg-blue border border-slate-100">
      <section className="flex flex-col gap-4 md:mx-auto mx-4 max-w-prose">
        <h2 className="flex flex-col gap-y-2 max-w-prose mb-2 ">
          <div>
            From the team behind Reading's top-rated Chinese restaurant,{" "}
            <a href="https://kungfureading.co.uk/">Kungfu Kitchen</a>.
          </div>

          <div>
            Specialty Cantonese cuisine, hotpot, and Korean BBQ. Completely nut free, plus extensive vegan,
            veggie, and gluten free options.
          </div>
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
