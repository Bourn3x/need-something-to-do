import "./HomePage.scss"
import Title from "../Title"
import Heading from "../Heading"
import Drawing from "../Drawing"

const HomePage = () => { 

  return(
    <div className={'main-container'}>
      <Title title={"Need something to do?"}/>
      <Heading title={"Perfect! Here's a random activity generator!"}/>
      <Drawing/>
    </div>
  )
}

export default HomePage
