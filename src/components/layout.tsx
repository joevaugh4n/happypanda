import { ReactNode } from "react";
import ComingSoon from "./comingsoon";
import ReactGA from "react-ga4";
import CookieConsent from "react-cookie-consent";
import Header from "../components/header";
import Footer from "./footer";

interface Props {
  children: ReactNode;
  status?: "open" | "closed";
  title: string;
  telephone: string;
  email: string;
  address: string;
}

export default function Layout({
  children,
  status = "open",
  title,
  telephone,
  email,
  address,
}: Props) {
  const handleGAInitialization = () => {
    ReactGA.initialize("G-WMKZB2M77W");
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  };

  return (
    <div className="flex flex-col bg-white gap-8">
      <CookieConsent
        flipButtons
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        enableDeclineButton
        style={{ background: "#2B373B" }}
        onAccept={handleGAInitialization}
        onDecline={() => console.log("User declined cookies.")}
        expires={60}
      >
        🐼 We use (fortune) cookies to enhance our user experience.
      </CookieConsent>
      <h1 className="hidden">{title}</h1>

      <Header telephone={telephone} />

      {status == "open" ? children : <ComingSoon />}

      <Footer telephone={telephone} email={email} address={address} />
    </div>
  );
}
