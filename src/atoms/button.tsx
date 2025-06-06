import React from "react";
import ReactGA from "react-ga4";

interface Props {
  caption: string;
  link?: string;
  absolute?: boolean;
  full?: boolean;
}

export default function Button({ caption, link, absolute, full }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!link) {
      e.preventDefault(); // Prevent navigation if no link is provided
      console.warn("Button link is missing!");
      return;
    }

    // Send the GA4 event
    ReactGA.event({
      category: "Button",
      action: "Click",
      label: caption || link,
    });
  };

  return (
    <a
      className={`inline-flex rounded-sm px-8 py-4 bg-kfk-red hover:bg-zinc-950 shadow
        text-center justify-center hover:cursor-pointer hover:no-underline h-auto self-start
        ${
          absolute &&
          "z-1 top-2 sticky self-end justify-end md:right-16 right-4"
        } 
        ${full ? "md:w-fit w-full" : "w-fit"}`}
      href={link}
      title={caption ? caption : link}
      onClick={handleClick} // Add the click handler here
    >
      <button className="text-white capitalize inline-flex items-center align-self">
        <span className="button-label font-medium">{caption}</span>
      </button>
    </a>
  );
}
