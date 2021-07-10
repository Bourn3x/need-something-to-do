import "./HomePage.scss"
import Title from "../Title"
import Heading from "../Heading"
import Laptop from "../Laptop"

const HomePage = () => { 

  return(
    <div className={'main-container'}>
      <Title title={"Need something to do?"}/>
      <Heading title={"Perfect! Here's a random activity generator!"}/>
      <Laptop/>
    </div>
  )
}

export default HomePage
