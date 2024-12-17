import { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";

interface Props {
    toggle?: boolean
}

export default function Notice({ toggle }: Props) {
    const [open, setOpen] = useState(toggle)

    return (
        open &&
        <p className='py-2 md:px-12 px-4 bg-blue-500 text-black text-pretty flex justify-center gap-2'>
            Example text that you could use to advertise something. < FaRegWindowClose className='hover:cursor-pointer' onClick={() => setOpen(false)
            } />
        </p >)
}