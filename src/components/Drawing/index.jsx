import  { ReactComponent as ReactLogo } from "./drawing.svg"
import "./Drawing.scss"
import { useEffect } from "react"
import Vivus from "vivus"
import { SVG_DRAW_DELAY, SVG_DRAW_DURATION } from "../../abstracts/constants"

const Drawing = () => {
  useEffect(() => {
    const svg = new Vivus('drawing', { 
      duration: SVG_DRAW_DURATION,
    }).stop()

    setTimeout(() => {
      svg.play()
    }, 
    SVG_DRAW_DELAY);
  })

  return (
    <div className={"drawing-container"}>
      <ReactLogo />
    </div>
  );
}

export default Drawing
