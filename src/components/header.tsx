import logo from "/assets/logo.webp";

/** Header component. Contains the KFK logo and the CTA button, top right. */
export default function Header() {
  return (
    <>
      <div className="flex md:flex-row flex-col-reverse justify-between md:items-start margin">
        <a
          href="/"
          className="md:w-2/5 md:h-auto inline-block w-[80%] h-auto self-center"
          title="Happy Panda"
        >
          <img className="lg:mx-0 mx-auto" src={logo} alt="Logo" />
        </a>
        <div className="md:mb-0 mb-2"></div>
      </div>
    </>
  );
}
