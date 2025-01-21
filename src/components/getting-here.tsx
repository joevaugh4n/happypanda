import { FaDirections, FaClock } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import ListItem from "../atoms/list-item";

export default function GettingHere() {
  return (
    <section>
      <ul className="flex-col flex gap-2 justify-start">
        <ListItem icon={<FaDirections />}>
          <a
            href="https://maps.app.goo.gl/e96rezVHwrr6gLPx5"
            className="text-kfk-red hover:underline"
          >
            80 Christchurch Road, Reading, RG2 7AZ
          </a>
        </ListItem>
        <ListItem icon={<FaPhone />}>
          <a href="tel:07587 577966" className="text-kfk-red hover:underline">
            07587 577966
          </a>
          &nbsp;/&nbsp;
          <a
            href="mailto:info@happypandareading.co.uk"
            className="text-kfk-red hover:underline"
          >
            email
          </a>
        </ListItem>
        <ListItem icon={<FaClock />}>
          <span>TBC</span>
        </ListItem>
      </ul>
    </section>
  );
}
