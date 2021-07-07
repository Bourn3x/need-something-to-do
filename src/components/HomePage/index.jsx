import styles from "./HomePage.module.scss"
import Title from "../Title"

const HomePage = () => { 

  return(
    <div className={`${styles['main-container']}`}>
      <Title title={"Need something to do?"} speed={1}/>
    </div>
  )
}

export default HomePage
