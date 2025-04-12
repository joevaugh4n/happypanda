import { FaQuoteLeft } from "react-icons/fa";

interface Props {
  quote: string;
  author: string;
  source?: string;
}

export default function Quote({ quote, author, source }: Props) {
  return (
    <section className="flex flex-col mx-auto">
      <FaQuoteLeft className="text-kfk-red mb-4 md:self-center" />
      <p className="mb-4 italic text-pretty text-2xl" >{quote}</p>
      <p className="text-pretty">
        — {author}
        {source && `, ${source}`}
      </p>
    </section>
  );
}
