import Button from "../atoms/button";
import logo from "/assets/logo.webp";

interface HeaderProps {
  telephone: string;
}
export default function Header({ telephone }: HeaderProps) {
  return (
    <header className="flex justify-between flex-row mt-4">
      <a href="/" title="Happy Panda" className="flex justify-center">
        <img className="md:w-60 w-1/2" src={logo} alt="Logo" />
      </a>
      <div className="md:block hidden">
        <Button caption="07884 784688" link={`tel:${telephone}`} />
      </div>
    </header>
  );
}
