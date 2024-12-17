import { FaQuoteLeft } from "react-icons/fa";

interface Props {
  quote: string;
  author: string;
}

export default function Quote({ quote, author }: Props) {
  return (
    <section className="flex flex-col margin py-8">
      <FaQuoteLeft className="text-kfk-red md:mb-8 mb-4 md:self-center" />
      <p className="mb-4 italic text-pretty">{quote}</p>
      <p>-{author}</p>
    </section>
  );
}
