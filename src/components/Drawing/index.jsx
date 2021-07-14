import  { ReactComponent as DrawingLarge } from "./drawing_large.svg"
import { ReactComponent as DrawingMedium } from "./drawing_medium.svg"
import { ReactComponent as DrawingSmall } from "./drawing_small.svg"
import "./Drawing.scss"
import { useEffect } from "react"
import Vivus from "vivus"
import { SVG_DRAW_DELAY, SVG_DRAW_DURATION } from "../../abstracts/constants"
import Activity from "../Activity";

const Drawing = ({ activity }) => {
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

    const svg3 = new Vivus('drawing3', { 
      duration: SVG_DRAW_DURATION,
    }).stop()

    setTimeout(() => {
      svg3.play()
    }, 
    SVG_DRAW_DELAY);
  })

  return (
    <div className={"drawing-container"}>
      <Activity activity={activity}/>
      <DrawingLarge className={'svg-large'}/>
      <DrawingMedium className={'svg-medium'}/>
      <DrawingSmall className={'svg-small'}/>
    </div>
  );
}

export default Drawing
