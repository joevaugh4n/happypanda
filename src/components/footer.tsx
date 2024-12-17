import Nav from "./navigation";

export default function Footer() {
  return (
    <section className="text-pretty py-8 grid grid-cols-[2fr_1fr] gap-4 margin">
      <div className='flex flex-col gap-2'>
        <p className="font-bold">
          © <span className="tracking-wider">Happy Panda Café</span>, 2024
        </p>
        <p>
          <span className="font-semibold">Happy Panda Café</span>: 80
          Christchurch Road, Reading, RG2 7AZ
        </p>
        <p>
          <span className="font-semibold">Kungfu Kitchen</span>: 62 Christchurch
          Road, Reading, RG2 7AZ
        </p>
      </div>
      <Nav />
    </section>
  );
}
