import Button from "../atoms/button";
import logo from "/assets/logo.webp";

interface HeaderProps {
  telephone: string;
}
export default function Header({ telephone }: HeaderProps) {
  return (
    <header className="flex justify-between mt-4">
      <a href="/" title="Happy Panda">
        <img className="w-60" src={logo} alt="Logo" />
      </a>
      <Button caption="07884 784688" link={`tel:${telephone}`} />
    </header>
  );
}
