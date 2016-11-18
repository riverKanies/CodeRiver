import React from 'react'
import styles from './styles'

type Props = {
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
    <aside role='sidebar' className={styles.sidebar}>
      <div className='sidebarContainer'>
        <header className='sidebar'>
          <h3>{title}</h3>
        </header>
        <ul className={styles.sidebar}>
          {renderList(items)}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
