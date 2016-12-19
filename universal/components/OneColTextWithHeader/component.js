import React from 'react'
import styles from './styles'

type Props = {
  title: string,
  bgColor: 'default' | 'gray',
  textAlign: 'left' | 'center',
  hasSubtitle: boolean,
  subTitle: string,
  largeCopyContent: boolean,
  text: Array<string>
};

// JSX Logic True/False Subtitle
function Header ({
  title,
  hasSubtitle,
  subTitle
}: { title: string, hasSubtitle: boolean, subTitle: string }) {
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

// JSX Logic, Large or Small Copy Text, True/False
function CopyContent ({
  largeCopyContent,
  text
}: { largeCopyContent: boolean, text: Array<string>, }) {
  if (largeCopyContent) {
    return (
      <div className={styles.copyContentGrow}>
        {text.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      </div>
    )
  }
  return (
    <div className={styles.copyContent}>
      {text.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
    </div>
  )
}

const defaultText = [
  `Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo,
  tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean
  lacinia bibendum nulla sed consectetur.`
]

const OneColTextWithHeader = ({
  title = 'Title',
  bgColor = 'default',
  textAlign = 'left',
  hasSubtitle = false,
  subTitle = 'Sub Title',
  largeCopyContent = false,
  text = defaultText
}: Props) => {
  return (
    <section className={styles[bgColor]}>
      <div className={styles.container}>
        <section className={styles[textAlign]}>
          <Header title={title} hasSubtitle={hasSubtitle} subTitle={subTitle} text={text} />
          <CopyContent largeCopyContent={largeCopyContent} text={text} />
        </section>
      </div>
    </section>
  )
}

export default OneColTextWithHeader
