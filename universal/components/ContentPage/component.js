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
      {this.renderLinks()}
    </div>)
  }
  renderIcons() {
    const { icons } = this.props
    if (!icons) return ''
    const iconClass = (icons.length == 3)? 'icon3' : 'icon'
    return (<div className={styles.iconContainer}>
      {this.props.icons.map((icon, i)=>{
        return <div key={i} className={styles[iconClass]}>
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
      if (sec.paragraphs) {
        return (<div key={i}>
          <strong className={styles.body}>{sec.heading}</strong>
          {sec.paragraphs.map((p, j)=>{
            if ( j == (sec.paragraphs.length-1) ) {
              return <p key={j} className={styles.body}>{p}</p>
            }
            return <p key={j} className={styles.body}>{p}<br/><br/></p>
          })}
          <br/>
        </div>)
      }
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
  renderLinks() {
    const { links, specialLink } = this.props
    if (specialLink) {
      return <a className={styles.link2} target="_blank" href={specialLink.href}>{specialLink.label}</a>
    }

    if (!links) return ''
    return links.map((l,i)=>{
      const linkClass = isEven(i) ? styles.link : styles.link2
      return <Link key={i} to={l.url} className={linkClass}>{l.label}</Link>
    })
  }
}

function isEven(n) {
  n = Number(n);
  return n === 0 || !!(n && !(n%2));
}

export default ContentPage
