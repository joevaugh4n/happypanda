interface Props {
  caption: string;
  link: string;
  disable?: boolean;
  style?: "rounded" | "half";
}

export default function Button({
  caption,
  link,
  disable = false,
  style = "rounded",
}: Props) {
  return disable ? (
    <button className="aspect-rectangle px-8 py-4 bg-kfk-red hover:bg-zinc-950 rounded text-center w-fit text-white font-semibold capitalize flex items-center cursor-not-allowed">
      <span className="button-label">{caption}</span>
    </button>
  ) : (
    <a
      className={`flex aspect-rectangle px-8 py-4 bg-kfk-red hover:bg-zinc-950 shadow min-w-[32px] w-fit ${
        style == "rounded" ? "rounded-[60px]" : "rounded-b"
      } text-center min-h-[32px] justify-center hover:cursor-pointer`}
      href={link}
    >
      <button className="text-white font-semibold capitalize flex items-center">
        <span className="button-label">{caption}</span>
      </button>
    </a>
  );
}
