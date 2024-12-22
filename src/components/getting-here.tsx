import { FaDirections, FaClock } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaKitchenSet } from "react-icons/fa6";
import { MdExpandCircleDown, MdArrowCircleUp } from "react-icons/md";
import { useState } from "react";

import ListItem from "../atoms/list-item";

type DayOfWeek =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

type OpeningHoursType = {
  [key in DayOfWeek]: string;
};

const today = new Date();
const dayName = today
  .toLocaleDateString("en-UK", { weekday: "long" })
  .toLowerCase() as DayOfWeek;

export default function GettingHere() {
  const [list, expandList] = useState(false);

  const openingHours: OpeningHoursType = {
    monday: "10:00 AM - 8:00 PM",
    tuesday: "10:00 AM - 8:00 PM",
    wednesday: "10:00 AM - 8:00 PM",
    thursday: "10:00 AM - 8:00 PM",
    friday: "10:00 AM - 9:00 PM",
    saturday: "11:00 AM - 9:00 PM",
    sunday: "11:00 AM - 5:00 PM",
  };

  const todaysHours = openingHours[dayName];

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
        </ListItem>
        <ListItem icon={<FaClock />}>
          Open today from {todaysHours}.{" "}
          <span
            onClick={() => expandList(!list)}
            className="text-kfk-red cursor-pointer hover:underline font-bold"
          >
            <br />
            {list ? "Hide" : "View"} opening hours
            {list ? (
              <MdArrowCircleUp className="pl-1 inline-flex" />
            ) : (
              <MdExpandCircleDown className="pl-1 inline-flex" />
            )}
          </span>
          {list && (
            <div className="mt-6">
              <h3>Full opening hours</h3>
              {Object.entries(openingHours).map(([day, hours]) => (
                <p
                  key={day}
                  className={`${day === dayName ? " text-kfk-red" : ""}`}
                >
                  {day.charAt(0).toUpperCase() + day.slice(1)}: {hours}
                </p>
              ))}
            </div>
          )}
        </ListItem>
        <ListItem icon={<FaKitchenSet />}>
        <b className='text-kfk-red'>Serving times</b>: Brunch 9am-12pm, Dim Sum and Cantonese menu 12pm-10pm, BBQ and hot pot 5pm-10pm
        </ListItem>
      </ul>
    </section>
  );
}
