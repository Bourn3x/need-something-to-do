import styles from "./HomePage.module.scss"
import Title from "../Title"
import Heading from "../Heading"

const HomePage = () => { 

  return(
    <div className={`${styles['main-container']}`}>
      <Title title={"Need something to do?"}/>
      <Heading title={"Perfect! Here's a random activity generator!"}/>
    </div>
  )
}

export default HomePage
