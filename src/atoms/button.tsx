import React from "react";
import ReactGA from "react-ga4";

interface Props {
  caption: string;
  link?: string;
  style?: "rounded" | "half";
  absolute?: boolean;
  full?: boolean;
}

export default function Button({
  caption,
  link,
  style = "rounded",
  absolute,
  full,
}: Props) {
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
      className={`flex aspect-rectangle px-8 py-4 bg-kfk-red hover:bg-zinc-950 shadow min-w-[32px] ${
        style == "rounded" ? "rounded-[60px]" : "rounded-b"
      } text-center min-h-[32px] justify-center hover:cursor-pointer hover:no-underline ${
        absolute && "z-1 top-2 sticky self-end justify-end md:right-16 right-4"
      } ${full ? "md:w-fit w-full" : "w-fit"}`}
      href={link}
      title={caption ? caption : link}
      onClick={handleClick} // Add the click handler here
    >
      <button className="text-white font-semibold capitalize flex items-center">
        <span className="button-label">{caption}</span>
      </button>
    </a>
  );
}
