import React from 'react'
import styles from './styles'
import lists from 'universal/data/lists.js'

type Props = {
  listID: string,
  listTitle: string,
  listItemText: Array<string>,
  listItemURL: Array<string>,
  sidebarClass: string
};

const renderList = (lists) => listDetails.map((listItemText, listItemURL) => {
  return (
    <li><a href='{listItemURL}'>{listItemText}</a></li>
  )
})

const Sidebar = ({
  listID = 'defaultList',
  listTitle = 'Default List'
}: Props) => {
  return (
    <aside role='sidebar'
      className={[styles.sidebar, styles['sectionClass']]}>
      <header>
        <h3>{listTitle}</h3>
      </header>
      <ul>
        {renderList}
      </ul>
    </aside>
  )
}

export default Sidebar
