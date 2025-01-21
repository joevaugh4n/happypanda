import Nav from "./navigation";

export default function Footer() {
  return (
    <address className="text-pretty py-4 grid grid-cols-[2fr_1fr] not-italic gap-4 margin border-t-blue border-t-2">
      <div className="flex flex-col gap-2">
        <p className="font-medium">© Happy Panda, 2024</p>
        <p>Address: 80 Christchurch Road, Reading, RG2 7AZ</p>{" "}
        <p>
          Tel: <a href="tel:07587 577966">07587 577966</a>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:info@happypandareading.co.uk">
            info@happypandareading.co.uk
          </a>
        </p>
      </div>
      <>
        <Nav />
        <p className="self-end">
          Site by <a href="https://joevaughan.net/">Joe Vaughan</a>
        </p>
      </>
    </address>
  );
}
