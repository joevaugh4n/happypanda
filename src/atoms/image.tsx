import Button from "./button";

interface Props {
  title: string;
  src: string;
  caption?: string;
  cta: {
    caption: string;
    link: string;
  };
}

export default function Picture({ title, src, caption, cta }: Props) {
  return (
    <a href={cta.link}>
      <figure>
        <img
          title={title}
          alt={title}
          className={`rounded-t ${caption && "mb-2"}`}
          src={src}
        />
        {caption && <p className="text-sm">{caption}</p>}
        {cta && <Button style="half" caption={cta.caption} />}
      </figure>
    </a>
  );
}
