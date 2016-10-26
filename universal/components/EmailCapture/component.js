import React from 'react'
import styles from './styles'
// Add in a button

type Props = {
  title: String,
  sectionText: Array,
};

const defaultText = [`Morbi leo risus, porta ac consectetur ac, vestibulum at
eros. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Cras
mattis consectetur purus sit amet fermentum.`]

const EmailCapture = ({ title = 'Title', sectionText = defaultText }: Props) => {
  return (
    <section className={styles.emailCapture}>
      <div className={styles.container}>
        <header>
          <h3>{title}</h3>
        </header>
        <section className={styles.sectionContent}>
          {sectionText.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </section>
        <form className={styles.emailInput}>
          <input type='email' placeholder='Enter Email' value='emailAddress' readOnly />
          <input type='submit' value='submit' />
        </form>
      </div>
    </section>
  )
}

export default EmailCapture
