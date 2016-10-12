import React from 'react'
import styles from './styles.scss'

type Props = {
  title: String
};

const <%= pascalEntityName %> = ({ title = '<%= pascalEntityName %>' }: Props) => {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default <%= pascalEntityName %>
