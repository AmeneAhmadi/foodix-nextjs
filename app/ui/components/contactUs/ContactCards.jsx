import { contactUsData } from "@/app/data/data";
import ContactCard from "./ContactCard";
import clsx from "clsx";

export default function ContactCards() {
  const { contactInfo } = contactUsData;

  return (
    <div className="bg-white py-16 px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 mx-auto w-full flex justify-center">
      <div
        className={clsx(
          "flex flex-col md:flex-row justify-center items-center flex-wrap lg:flex-nowrap",
          "gap-5 w-full justify-center items-center sm:my-9"
        )}
      >
        {contactInfo.map((card, index) => (
          <ContactCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
}
