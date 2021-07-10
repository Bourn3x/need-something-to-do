import "./Heading.scss"

const Heading = ({ title }) => {

  return (
    <div className={'heading-container'}>
      <code className={'heading'}>
        {title}
      </code>
    </div>
  )
}

export default Heading
