import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Gallery({ children }: Props) {
  return (
    <div className="grid sm:grid-cols-2 gap-8 margin items-end">{children}</div>
  );
}
