interface Props {
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export default function ListItem({ icon, children = "lorem ipsum" }: Props) {
  return (
    <li className="flex gap-4 items-start">
      {icon && <span className="text-xl pt-1 text-kfk-red">{icon}</span>}
      <p className="max-w-prose">{children}</p>
    </li>
  );
}
