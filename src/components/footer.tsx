import Nav from "./navigation";

export default function Footer() {
  return (
    <address className="py-4 grid grid-cols-[2fr_1fr] not-italic margin border-t-blue border-t-2">
      <div className="flex flex-col gap-1">
        <p className="font-medium">© Happy Panda, 2024</p>
        <p>
          Address:&nbsp;
          <a href="https://maps.app.goo.gl/AxHZRgymPKVHzhLM9">
            80 Christchurch Road, Reading, RG2 7AZ
          </a>
        </p>
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
