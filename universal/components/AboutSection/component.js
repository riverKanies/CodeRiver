import React from 'react'
import styles from './styles'

type Props = {
  title: string,
  hasSubtitle: boolean,
  subTitle: string,
  text: Array<string>
};

// JSX Logic True/False Subtitle
function Header ({
  title,
  hasSubtitle,
  subTitle,
  text
}: { title: string, hasSubtitle: boolean, subTitle: string, text: Array<string>, }) {
  if (hasSubtitle) {
    return (
      <header className={styles.header}>
        <h1 className={styles.h1}>{title}</h1>
        <h2 className={styles.h2}>{subTitle}</h2>
      </header>
    )
  }
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>{title}</h1>
    </header>
  )
}

const defaultText = [
  `Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo,
  tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean
  lacinia bibendum nulla sed consectetur.`
]

const AboutSection = ({
  title = 'Title',
  hasSubtitle = false,
  subTitle = 'Sub Title',
  text = defaultText
}: Props) => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.container}>
        <section className={styles.content}>
          <Header title={title} hasSubtitle={hasSubtitle} subTitle={subTitle} text={text} />
          <div className={styles.copyContent}>
            {text.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
        </section>
      </div>
    </section>
  )
}

export default AboutSection
