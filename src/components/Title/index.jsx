import styles from "./styles.module.scss"
import React, { useEffect } from 'react';

const Title = ({ title, titleSpeed }) => {

  return (
    <div className={styles['title-container']}>
      <code className={styles['title']}>
        {title}
      </code>
    </div>
  )
}

export default Title
