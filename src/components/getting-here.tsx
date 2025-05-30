import { FaDirections, FaClock } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import ListItem from "../atoms/list-item";

interface Props {
  telephone: string;
  email: string;
  address: string;
  openOn: string;
}

export default function GettingHere({
  telephone,
  email,
  address,
  openOn,
}: Props) {
  return (
    <section>
      <ul className="flex-col flex justify-start">
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
          <div>{openOn}, 9am - 9.30pm</div>
          {/**
          <ul className="flex flex-col text-balance gap-1">
            <li className="text-balance">
              9am - 12pm:&nbsp;Chinese and English breakfasts
            </li>
            <li className="text-balance">
              11am - 9:30pm:&nbsp;Cantonese cuisine and dim sum
            </li>
            <li className="text-balance">
              6pm - 9:30pm:&nbsp;Hotpot and Korean BBQ, <u>booking essential</u>{" "}
              so we can prepare all the fresh ingredients for you (available at
              lunch with prebooking)
            </li>
          </ul>
          */}
        </ListItem>
        <ListItem icon={<FaPhone />}>
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
            info@happypandareading.co.uk
          </a>
        </ListItem>
      </ul>
    </section>
  );
}
