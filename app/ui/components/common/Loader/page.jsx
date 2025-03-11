import clsx from "clsx";
import styles from "./styles.module.css";
export default function Loader() {
  return (
    <div
      className={clsx(
        "flex items-center justify-center w-screen h-screen z-[9999] bg-white"
      )}
    >
      <div className="relative w-24 h-24">
        <div
          className={clsx(
            "absolute w-full h-full rounded-full border-3 border-[var(--secondary-color)] border-r-[var(--secondary-color)] border-t-[var(--secondary-color)] border-b-transparent border-l-transparent box-border",
            styles.outerCircle
          )}
        ></div>
        <div
          className={clsx(
            "absolute w-[80%] h-[80%] top-[12.5%] left-[12.5%] rounded-full border-3 border-r-[var(--primary-color)] border-b-[var(--primary-color)] border-t-transparent border-l-transparent box-border",
            styles.middleCircle
          )}
        ></div>
        <div
          className={clsx(
            "absolute w-[60%] h-[60%] top-[25%] left-[25%] rounded-full border-3 border-b-[var(--secondary-color)] border-l-[var(--secondary-color)] border-r-transparent border-t-transparent box-border",
            styles.innerCircle
          )}
        ></div>
      </div>
    </div>
  );
}
