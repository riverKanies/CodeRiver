import React from 'react'
import { Link } from 'react-router'

import styles from './styles'



class ContentPage extends React.Component {
  render () {
    return (<div className={styles.container}>
      <h1 className={styles.header}>{this.props.header}</h1>
      <h3 className={styles.subheader}>{this.props.subheader}</h3>
      {this.renderIcons()}
      {this.renderSections()}
      {/*this.renderParagraphs()*/}
      <p className={styles.footNote}>{this.props.footNote}</p>
      <br/>
      <br/>
      {this.props.links.map((l,i)=>{
        const linkClass = isEven(i) ? styles.link : styles.link2
        return <Link key={i} to={l.url} className={linkClass}>{l.label}</Link>
      })}
    </div>)
  }
  renderIcons() {
    const { icons } = this.props
    if (!icons) return ''
    return (<div className={styles.iconContainer}>
      {this.props.icons.map((icon, i)=>{
        return <div key={i} className={styles.icon}>
          <img src={icon.image} />
          <p>{icon.caption}</p>
        </div>
      })}
    </div>)
  }
  renderSections() {
    const { sections } = this.props
    if (!sections) return ''
    return sections.map((sec, i)=>{
      return (<div key={i}>
        <strong className={styles.body}>{sec.heading}</strong>
        <p className={styles.body}>{sec.body}</p>
        <br/>
      </div>)
    })
  }
  renderParagraphs() {
    const { paragraphs } = this.props
    if (!paragraphs) return ''
    return paragraphs.map((p,i)=>{
      return <p key={i} className={styles.body}>{p}</p>
    })
  }
}

function isEven(n) {
  n = Number(n);
  return n === 0 || !!(n && !(n%2));
}

export default ContentPage
