import logo from "/assets/logo.webp";

/** Header component. Contains the KFK logo and the CTA button, top right. */
export default function ComingSoon() {
  return (
    <>
      <div className="flex flex-col items-center gap-4 mt-2">
        <a
          href="/"
          className="md:w-2/5 md:h-auto inline-block w-fit h-fit"
          title="Happy Panda"
        >
          <img className="md:mx-0 w-fit" src={logo} alt="Logo" />
        </a>
        <h2>Website coming soon...</h2>
        <p>
          In the meantime:
          <ul className="my-2">
            <li>
              tel:&nbsp;
              <a
                className="hover:underline text-kfk-red"
                href="tel:07587 577966"
              >
                07587 577966
              </a>
            </li>
            <li>
              email:&nbsp;
              <a
                className="hover:underline text-kfk-red"
                href="mailto:info@happypandareading.co.uk"
              >
                info@happypandareading.co.uk
              </a>
            </li>
          </ul>
        </p>
      </div>
    </>
  );
}
