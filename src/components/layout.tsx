import { ReactNode } from "react";
import ComingSoon from "./comingsoon";

interface Props {
  children: ReactNode;
  status: "open" | "closed";
  title: string;
}

export default function Layout({ children, status, title }: Props) {
  return (
    <div className="flex flex-col bg-white gap-8">
      <h1 className='hidden'>{title}</h1>
      {status == "open" ? children : <ComingSoon />}{" "}
    </div>
  );
}
