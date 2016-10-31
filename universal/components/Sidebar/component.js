import React from 'react'
import styles from './styles'

type Props = {
  sectionClass: string,
  title: string,
  listName: Array<string>,
};

const defaultList = []

const renderList = (listItem) => listItem.map((item, url) => {
  let listitem = 'defaultList'
  return (
    <li key={index}><a href='LIST LINK URL HERE'>LIST ITEM TEXT HERE</a></li>
  )
})

const Sidebar = ({
  sectionClass = 'thriveAside',
  title = 'Sidebar',
  listName = defaultList
}: Props) => {
  return (
    <aside role='sidebar'
      className={[styles.sidebar, styles['sectionClass']]}>
      <header>
        <h3>{title}</h3>
      </header>
      <ul>
        {renderList}
      </ul>
    </aside>
  )
}

export default Sidebar
