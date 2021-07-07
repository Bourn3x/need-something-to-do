import styles from "./HomePage.module.scss"
import Title from "../Title"

const HomePage = () => { 
  return(
    <div className={`${styles['main-container']}`}>
      <Title/>
    </div>
  )
}

export default HomePage
