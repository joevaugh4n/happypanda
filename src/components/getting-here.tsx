import { FaDirections, FaClock } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import ListItem from "../atoms/list-item";

interface Props {
  telephone: string;
  email: string;
  address: string;
}

export default function GettingHere({ telephone, email, address }: Props) {
  return (
    <section>
      <ul className="flex-col flex gap-4 justify-start">
        <ListItem icon={<FaDirections />}>
          <a
            href="https://maps.app.goo.gl/AxHZRgymPKVHzhLM9"
            title={address}
            className="text-kfk-red hover:underline"
          >
            {address}
          </a>
        </ListItem>
        <ListItem icon={<FaClock />}>
          <div className="mb-2 font-bold">Every day, 9am to 9:30pm</div>
          <ul className="flex flex-col text-balance gap-1">
            <li className="text-balance">
              9am to 12pm:&nbsp;Chinese and English breakfasts
            </li>
            <li className="text-balance">
              11am to 9:30pm:&nbsp;Cantonese cuisine and dim sum
            </li>
            <li className="text-balance">
              6pm to 9:30pm:&nbsp;Hot pot and barbecue, booking essential
              (available at lunch with prebooking)
            </li>
          </ul>
        </ListItem>
        <ListItem icon={<FaPhone />}>
          Book now at&nbsp;
          <a
            title={telephone}
            href={`tel:${telephone}`}
            className="text-kfk-red hover:underline"
          >
            {telephone}
          </a>
          &nbsp;/&nbsp;
          <a
            href={`mailto:${email}`}
            className="text-kfk-red hover:underline"
            title={email}
          >
            email
          </a>
        </ListItem>
      </ul>
    </section>
  );
}
