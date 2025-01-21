interface Props {
  caption: string;
  link: string;
  style?: "rounded" | "half";
}

export default function Button({ caption, link, style = "rounded" }: Props) {
  return (
    <a
      className={`flex aspect-rectangle px-8 py-4 bg-kfk-red hover:bg-zinc-950 shadow min-w-[32px] w-fit ${
        style == "rounded" ? "rounded-[60px]" : "rounded-b"
      } text-center min-h-[32px] justify-center hover:cursor-pointer hover:no-underline`}
      href={link}
    >
      <button className="text-white font-semibold capitalize flex items-center">
        <span className="button-label">{caption}</span>
      </button>
    </a>
  );
}
