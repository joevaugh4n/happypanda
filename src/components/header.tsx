import logo from "/assets/logo.webp";

interface Props {
  logoSize: "large" | "small";
}

/** Header component. Contains the KFK logo and the CTA button, top right. */
export default function Header({ logoSize }: Props) {
  return (
    <>
      <div className="flex md:flex-row flex-col-reverse justify-between md:items-start">
        <a
          href="/"
          className={
            logoSize == "large"
              ? `md:w-2/5 md:h-auto inline-block h-auto self-center`
              : "w-52"
          }
          title="Happy Panda"
        >
          <img className="lg:mx-0 mx-auto" src={logo} alt="Logo" />
        </a>
        <div className="md:mb-0 mb-2"></div>
      </div>
    </>
  );
}
