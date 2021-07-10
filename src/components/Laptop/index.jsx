import  { ReactComponent as ReactLogo } from "./laptop.svg"
import "./Laptop.scss"
import { useEffect } from "react"
import Vivus from "vivus"

const Laptop = () => {
  useEffect(() => {
    new Vivus('laptop', { duration: 200 });
  })

  return (
    <div className={"laptop-container"}>
      <ReactLogo />
    </div>
  );
}

export default Laptop
