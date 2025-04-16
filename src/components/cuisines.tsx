import Button from "../atoms/button";
import cafe from "/menus/cafe.pdf";
import classics from "/menus/classics.pdf";

interface SectionProps {
  title: string;
  placement?: "left" | "right";
  body: string;
  times: string;
  booking?: boolean;
  /** Choose classics for breakfast, cafe for everything else.*/
  menu: "classics" | "cafe";
}

function Section({ title, body, times, booking, menu }: SectionProps) {
  return (
    <div className='md:mx-auto'>
      <div className="mb-4 max-w-prose">
        <h2 className="mb-2">{title ? title : "No title"}</h2>
        <p className="opacity-50">{times ? times : "No times"}</p>
        <p>{body ? body : "No text"}</p>
        <p>
          {booking && (
            <span>
              <b>Please note</b>: booking 1 day in advance is essential so we
              can prepare the ingredients.
            </span>
          )}
        </p>
      </div>
      <div className="flex gap-2">
        <Button caption="Menu" link={menu === "cafe" ? cafe : classics} />
        <Button caption="07884 784688" link="tel:07884784688" />
      </div>
    </div>
  );
}

export default function Cuisine() {
  return (
    <div className="margin grid lg:grid-cols-2 gap-y-12 gap-x-16 py-8">
      <Section
        title="Cantonese / dim sum"
        body={`Our head chef is a master of Cantonese cuisine, working in London's
          Chinatown since 1985. With forty years' experience, we use secret
          ingredients and homemade sauces to serve Cantonese dishes that make
          your tastebuds sing.`}
        times="11.30am - 9.30pm"
        menu="cafe"
      />

      <Section
        title="Korean BBQ / hotpot"
        placement="left"
        body={`There’s something magical about gathering around a bubbling hot pot or
          sizzling grill with friends and family. Whether you’re dipping fresh
          ingredients or grilling to perfection, it’s an experience that’s
          delicious, interactive, and full of laughter.`}
        times="1pm - 8.30pm"
        booking
        menu="cafe"
      />

      <Section
        title="Brunch"
        body={`Fresh and delicious breakfasts using only the finest ingredients, with
          handmade Parmentier potatoes, eggs Benedict, French toast, and
          pancakes. Choose from vegetarian, vegan, and gluten-free options.`}
        times="9am - 12pm"
        menu="classics"
      />
    </div>
  );
}
