interface Props {
  caption: string;
  link: string;
  style?: "rounded" | "half";
  absolute?: boolean;
}

export default function Button({
  caption,
  link,
  style = "rounded",
  absolute,
}: Props) {
  return (
    <a
      className={`flex aspect-rectangle px-8 py-4 bg-kfk-red hover:bg-zinc-950 shadow min-w-[32px] w-fit ${
        style == "rounded" ? "rounded-[60px]" : "rounded-b"
      } text-center min-h-[32px] justify-center hover:cursor-pointer hover:no-underline ${
        absolute && "z-1 top-2 sticky self-end md:right-16 right-4"
      }`}
      href={link}
    >
      <button className="text-white font-semibold capitalize flex items-center">
        <span className="button-label">{caption}</span>
      </button>
    </a>
  );
}
