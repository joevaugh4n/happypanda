import Nav from "./navigation";

interface Props {
  telephone: string;
  email: string;
  address: string;
}

export default function Footer({ telephone, email, address }: Props) {
  return (
    <address className="margin py-4 grid grid-cols-[2fr_1fr] not-italic border-t-blue border-t-2">
      <div className="flex flex-col">
        <p className="font-normal">© Happy Panda, 2024</p>
        <p>
          <a href="https://maps.app.goo.gl/AxHZRgymPKVHzhLM9" title={address}>
            {address}
          </a>
        </p>
        <p>
          <a href={`tel:${telephone}`} title={telephone}>
            {telephone}
          </a>
        </p>
        <p>
          <a href={`mailto:${email}`} title={email}>
            {email}
          </a>
        </p>
      </div>
      <>
        <Nav telephone={telephone} />
        <p className="self-end">
          Site by <a href="https://joevaughan.net/">Joe Vaughan</a>
        </p>
      </>
    </address>
  );
}
