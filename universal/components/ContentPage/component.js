import React from 'react'
import { Link } from 'react-router'

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
      <br/>
      <br/>
      {this.props.links.map((l,i)=>{
        const linkClass = isEven(i) ? styles.link : styles.link2
        return <Link key={i} to={l.url} className={linkClass}>{l.label}</Link>
      })}
    </div>)
  }
}

function isEven(n) {
  n = Number(n);
  return n === 0 || !!(n && !(n%2));
}

export default ContentPage
