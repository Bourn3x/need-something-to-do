import styles from "./styles.module.scss"

const Heading = ({ title }) => {

  return (
    <div className={styles['heading-container']}>
      <code className={styles['heading']}>
        {title}
      </code>
    </div>
  )
}

export default Heading
