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

const Sidebar = ({
  title = 'Default Title',
  items = ['1', '2', '3']
}: Props) => {
  return (
    <aside role='sidebar' className={[styles.sidebar, styles['sectionClass']]}>
      <header>
        <h3>{title}</h3>
      </header>
      <ul>
        {renderList(items)}
      </ul>
    </aside>
  )
}

export default Sidebar
