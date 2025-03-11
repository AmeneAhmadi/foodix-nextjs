import { PiHamburger } from "react-icons/pi";
import { LuSandwich } from "react-icons/lu";
import { PiBowlFoodLight } from "react-icons/pi";
import { GiBowlOfRice } from "react-icons/gi";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

export default function IconicVerticalBox({
  title,
  itemsNumber,
  animation,
  icon,
}) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  let IconComponent;

  switch (icon) {
    case "PiHamburger":
      IconComponent = PiHamburger;
      break;
    case "LuSandwich":
      IconComponent = LuSandwich;
      break;
    case "PiBowlFoodLight":
      IconComponent = PiBowlFoodLight;
      break;
    case "GiBowlOfRice":
      IconComponent = GiBowlOfRice;
      break;
    default:
      IconComponent = PiHamburger;
  }

  return (
    <div
      ref={ref}
      className={clsx(
        "bg-[var(--gray-light-color)] rounded-xl p-7",
        "hover:bg-[var(--primary-color)] hover:text-white transition duration-300 group",
        inView ? animation + " opacity-100" : "opacity-0",
        "transition-all duration-300 ease-out"
      )}
    >
      <div className="flex items-center gap-5">
        <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center bg-white group-hover:bg-white/10">
          <IconComponent size={30} />
        </div>
        <div>
          <h4 className="capitalize text-2xl font-bold">{title}</h4>
          <p>{itemsNumber} items</p>
        </div>
      </div>
    </div>
  );
}
