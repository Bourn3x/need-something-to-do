import  { ReactComponent as DrawingDesktop } from "./drawing.svg"
import { ReactComponent as DrawingMobile } from "./drawing_2.svg"
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

    const svg2 = new Vivus('drawing2', { 
      duration: SVG_DRAW_DURATION,
    }).stop()

    setTimeout(() => {
      svg2.play()
    }, 
    SVG_DRAW_DELAY);
  })

  return (
    <div className={"drawing-container"}>
      <DrawingDesktop className={'svg-desktop'}/>
      <DrawingMobile className={'svg-mobile'}/>
    </div>
  );
}

export default Drawing
