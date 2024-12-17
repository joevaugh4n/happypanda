interface Props {
    caption: string;
    link: string;
    disable?: boolean;
}

export default function Button({ caption, link, disable = false }: Props) {
    return (
        disable ?
            < button className='aspect-rectangle px-8 py-4 w-fit bg-kfk-red hover:bg-zinc-950 rounded text-center min-w-[32px] min-h-[24px] text-white font-semibold capitalize flex items-center cursor-not-allowed' >
                <span className='button-label'>{caption}</span>
            </button >
            :
            <a className='flex aspect-rectangle px-8 py-4 bg-kfk-red hover:bg-zinc-950 rounded text-center' href={link}>
                < button className='text-white font-semibold capitalize flex items-center min-w-[32px] min-h-[24px]' >
                    <span className='button-label'>{caption}</span>
                </button >
            </a >
    )
}