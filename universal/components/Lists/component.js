import React from 'react'
import styles from './styles'

type Props = {
  sectionClass: string,
  title: string,
  items: Array<any>
};

const renderList = (items) => items.map(
  (item, idx) => (<li key={idx}><a href={item.link}>{item.text}</a></li>)
)

const List = ({
  items = ['1', '2', '3']
}: Props) => {
  return (
    <ul className={styles.list}>
      {renderList(items)}
    </ul>
  )
}

export default List
