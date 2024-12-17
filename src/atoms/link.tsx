interface Props {
    caption: string;
    target: string;
    title?: string;
    blank?: boolean;
}

export default function Link({ caption, target, title, blank = true }: Props) {
    return (
        <a className='font-semibold text-kfk-red hover:underline' href={target} title={title ? title : caption} target={blank ? "_blank" : ""}>{caption}</a>
    )
}