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
    <section className={styles.list}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h3>{title}</h3>
        </header>
        <ul className={styles[listType]}>
          {items.map((listItem, index) => <li key={index}>{listItem}</li>)}
        </ul>
      </div>
    </section>
  )
}

export default List
