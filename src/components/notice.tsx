import { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";

interface Props {
  toggle?: boolean;
}

export default function Notice({ toggle }: Props) {
  const [open, setOpen] = useState(toggle);

  return (
    open && (
      <div className='bg-kfk-red px-2'>
        <p className="py-2 bg-blue-500 text-white text-pretty flex justify-center gap-2 mb-8">
          Example text that you could use to advertise something.{" "}
          <FaRegWindowClose
            className="hover:cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </p>
      </div>
    )
  );
}
