import React from 'react'
import styles from './styles'

type Props = {
  title: string,
  items: Array<any>
};

const renderList = (items) => items.map(
  (item, idx) => (<li key={idx}><a href={item.link}>{item.text}</a></li>)
)

const List = ({
  title = 'List Title',
  items = [{ link: 'http://www.google.com', text: 'google' }]
}: Props) => {
  return (
    <div className={styles.listContainer}>
      <header>
        <h3>{title}</h3>
      </header>
      <ul className={styles.list}>
        {renderList(items)}
      </ul>
    </div>
  )
}

export default List
