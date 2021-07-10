import "./Title.scss"

const Title = ({ title }) => {

  return (
    <div className={'title-container'}>
      <code className={'title'}>
        {title}
      </code>
    </div>
  )
}

export default Title
