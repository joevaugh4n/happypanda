interface Props {
  title: string;
  src: string;
  caption?: string;
  alt?: string;
}

export default function Picture({ title, src, caption, alt }: Props) {
  return (
    <figure className="flex flex-col items-center">
      <img
        title={title}
        alt={alt ? alt : title}
        className={`rounded-lg ${caption && "mb-2"}`}
        src={src}
      />
      {caption && <p className="text-sm">{caption}</p>}
    </figure>
  );
}
