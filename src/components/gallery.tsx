import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Gallery({ children }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">{children}</div>
  );
}
