import { FaQuoteLeft } from "react-icons/fa";

interface Props {
  quote: string;
  author: string;
  source?: string;
}

export default function Quote({ quote, author, source }: Props) {
  return (
    <section className="flex flex-col md:mx-auto mx-2">
      <FaQuoteLeft className="text-kfk-red mb-4 self-center" />
      <p className="mb-2 italic text-pretty text-2xl">{quote}</p>
      <p className="text-pretty">
        — {author}
        {source && `, ${source}`}
      </p>
    </section>
  );
}
