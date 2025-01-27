import { useState } from "react";

import ad1 from "/assets/ad1.jpeg";
import ad2 from "/assets/ad2.jpeg";

interface Props {
  title: string;
}

export default function Advert({ title }: Props) {
  const [view, changeView] = useState(true);
  return (
    <div className="mx-auto flex flex-col items-center gap-2 scroll-smooth">
      <img
        onClick={() => changeView(!view)}
        id="ad"
        src={view ? ad1 : ad2}
        alt="Spring festival edition all you can eat - £34.99 per person"
        className="md:w-2/3 hover:cursor-pointer"
        title={title}
      />
      <a href="/#ad">
        <button
          className="flex aspect-rectangle px-8 py-4 bg-kfk-red text-white font-semibold hover:bg-zinc-950 shadow min-w-[32px] w-fit rounded-[60px]"
          onClick={() => changeView(!view)}
        >
          {view ? "Show terms & conditions" : "Go back"}
        </button>
      </a>
    </div>
  );
}
