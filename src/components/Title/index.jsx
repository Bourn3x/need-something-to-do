import styles from "./styles.module.scss"

const Title = ({ title }) => {

  return (
    <div className={styles['title-container']}>
      <code className={styles['title']}>
        {title}
      </code>
    </div>
  )
}

export default Title
