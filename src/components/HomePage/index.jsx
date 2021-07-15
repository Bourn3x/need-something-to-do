import "./HomePage.scss"
import Title from "../Title"
import Heading from "../Heading"
import Button from "../Button"
import Drawing from "../Drawing"
import { useState } from 'react';
import Activity from "../../classes/Activity"

const HomePage = () => {
  const [activity, setActivity] = useState(null);

  const fetchActivity = () => {
    fetch("http://www.boredapi.com/api/activity/")
    .then(res => res.json())
    .then(json => setActivity(new Activity(json)))
  }

  return(
    <div className={'main-container'}>
      <Title title={"Need something to do?"}/>
      <Heading title={"Perfect! Here's a random activity generator!"}/>
      <Button handleClick={fetchActivity}/>
      <Drawing activity={activity}/>
    </div>
  )
}

export default HomePage
