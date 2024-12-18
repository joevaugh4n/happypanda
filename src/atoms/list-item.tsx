interface Props {
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

export default function ListItem({ icon, children = 'lorem ipsum' }: Props) {
    return (
        <li className='flex gap-4 items-center'>
            {icon && <span className="text-xl text-kfk-red">{icon}</span>}
            <p className='text-pretty'>{children}</p>
        </li>
    )
}