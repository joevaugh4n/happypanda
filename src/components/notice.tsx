import { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";

interface Props {
  toggle?: boolean;
}

export default function Notice({ toggle }: Props) {
  const [open, setOpen] = useState(toggle);

  return (
    open && (
      <div className="bg-kfk-red px-2 grid grid-cols-2 mx-auto mb-8 gap-8">
        <p className="py-2 bg-blue-500 text-white text-pretty">
          Thank you to everyone who has visited us so far! Enjoyed your visit?
          Please leave us a Google review!
        </p>

        <FaRegWindowClose
          className="hover:cursor-pointer text-xl"
          onClick={() => setOpen(false)}
        />
      </div>
    )
  );
}
