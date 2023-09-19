import { Dispatch, ReactElement, SetStateAction } from "react";
import { Sling as HamburgerReact } from "hamburger-react";
import styles from "./styles.module.scss";

type HamburgerProps = {
  toggled: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
  pathname: string;
};

const Hamburger = ({
  toggled,
  toggle,
  pathname,
}: HamburgerProps): ReactElement | null => {
  let backgroundColor;
  switch (pathname) {
    case "/":
      backgroundColor = "home";
      break;
    case "/about":
      backgroundColor = "about";
      break;
    case "/work":
      backgroundColor = "work";
      break;
    case "/contact":
      backgroundColor = "contact";
      break;
    default:
      backgroundColor = "home";
      break;
  }

  return (
    <div
      className={`${styles.hamburger} ${
        styles[`hamburger__${backgroundColor}`]
      }`}
    >
      <HamburgerReact size={30} toggled={toggled} toggle={toggle} />
    </div>
  );
};

export default Hamburger;
