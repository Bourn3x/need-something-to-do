import  { ReactComponent as ReactLogo } from "./laptop.svg"
import styles from "./styles.module.scss"
import { useEffect } from "react"
import Vivus from "vivus"

const Laptop = () => {
  useEffect(() => {
    new Vivus('laptop', { duration: 200 });
  })

  return (
    <div className={styles["laptop-container"]}>
      <ReactLogo />
    </div>
  );
}

export default Laptop