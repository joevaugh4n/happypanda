import Button from "../atoms/button";
import logo from "/assets/logo.png";

export default function Header() {
  return (
    <>
      <div className="flex md:flex-row flex-col-reverse justify-between md:items-start items-end margin my-4">
        <a href="/" className="md:w-2/5 md:h-auto inline-block w-fit h-fit" title="Happy Panda">
          <img
            className="md:mx-0 mx-auto w-fit"
            src={logo}
            alt="Logo"
          />
        </a>
        <div className="md:mb-0 mb-2">
          {" "}
          <Button caption="Make reservation" link="test" />
        </div>
      </div>
    </>
  );
}
