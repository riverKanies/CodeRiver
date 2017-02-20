import React from 'react'

import styles from './styles'



class ContentPage extends React.Component {
  render () {
    return (<div className={styles.container}>
      <h1 className={styles.header}>{this.props.header}</h1>
      <h3 className={styles.subheader}>{this.props.subheader}</h3>
      {this.props.paragraphs.map((p,i)=>{
        return <p key={i} className={styles.body}>{p}</p>
      })}
      <p className={styles.footNote}>{this.props.footNote}</p>
    </div>)
  }
}

export default ContentPage
