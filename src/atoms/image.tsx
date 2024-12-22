interface Props {
  title: string;
  src: string;
  caption?: string;
}

export default function Picture({ title, src, caption }: Props) {
  return (
    <figure className="flex flex-col items-center">
      <img
        title={title}
        alt={title}
        className={`rounded-lg ${caption && "mb-2"}`}
        src={src}
      />
      {caption && <p className="text-sm">{caption}</p>}
    </figure>
  );
}
