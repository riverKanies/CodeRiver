/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  hasTitle: boolean,
  title: string,
  listType: 'bullets' | 'numbers' | 'blank' | 'underline',
  items: Array<string>,
  itemWidth: 'full' | 'half'
};

const renderList = (items) => items.map(
  (item, idx) => (<li key={idx}>{item.text}</li>)
)

const List = ({
  hasTitle = true,
  title = 'List Title',
  listType = 'bullets',
  items = [
    'Item One',
    'Item Two',
    'Item Three',
    'Item Four'
  ],
  itemWidth = 'full'
}: Props) => {
  return (
    <div className={styles.listContainer}>
      <header className={styles.header}>
        <h3>{title}</h3>
      </header>
      <ul className={styles[listType]}>
        {renderList(items)}
      </ul>
    </div>
  )
}

export default List
