interface Props {
    icon: React.ReactNode;
    url: string;
    title: string;
}

export default function SocialIcon({ icon, url, title }: Props) {
    return (
        <li className='flex gap-4 items-start'>
            <a href={url} title={title}>
                {icon && <span className="text-2xl text-kfk-red hover:text-black">{icon}</span>}
            </a>
        </li>
    )
}