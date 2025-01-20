import { ReactNode } from "react";
import ComingSoon from "./comingsoon";

interface Props {
  children: ReactNode;
  status: "open" | "closed";
}

export default function Layout({ children, status }: Props) {
  return (
    <div className="flex flex-col bg-white gap-8">
      {status == "open" ? children : <ComingSoon />}{" "}
    </div>
  );
}
