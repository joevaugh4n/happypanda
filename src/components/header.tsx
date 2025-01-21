import Button from "../atoms/button";
import logo from "/assets/logo.webp";

interface HeaderProps {
  /** The button text */
  buttonLabel: string;
  /** The button number */
  buttonNumber: string;
}

/** Header component. Contains the KFK logo and the CTA button, top right. */
export default function Header({
  buttonLabel,
  buttonNumber = "07587 577966",
}: HeaderProps) {
  return (
    <>
      <div className="flex md:flex-row flex-col-reverse justify-between md:items-start items-end margin mt-4">
        <a
          href="/"
          className="md:w-2/5 md:h-auto inline-block w-[80%] h-auto self-center"
          title="Happy Panda"
        >
          <img className="lg:mx-0 mx-auto" src={logo} alt="Logo" />
        </a>
        <div className="md:mb-0 mb-2">
          {" "}
          <Button caption={buttonLabel} link={buttonNumber} />
        </div>
      </div>
    </>
  );
}
