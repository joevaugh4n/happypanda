interface Props {
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export default function ListItem({ icon, children = "lorem ipsum" }: Props) {
  return (
    <li className="flex gap-4 items-start">
      {icon && <span className="text-xl pt-1 text-kfk-red">{icon}</span>}
      <p className="lg:w-1/2 md:w-3/4">{children}</p>
    </li>
  );
}
