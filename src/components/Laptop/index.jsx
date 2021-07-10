import  { ReactComponent as ReactLogo } from "./laptop.svg"
import "./Laptop.scss"
import { useEffect } from "react"
import Vivus from "vivus"
import { SVG_DRAW_DELAY, SVG_DRAW_DURATION } from "../../abstracts/constants"

const Laptop = () => {
  useEffect(() => {
    const svg = new Vivus('laptop', { 
      duration: SVG_DRAW_DURATION,
    }).stop()

    setTimeout(() => {
      svg.play()
    }, 
    SVG_DRAW_DELAY);
  })

  return (
    <div className={"laptop-container"}>
      <ReactLogo />
    </div>
  );
}

export default Laptop
