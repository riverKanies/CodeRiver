/* @flow */
import React from 'react'
import styles from './styles'
import Button from 'components/Button'

type Props = {
  alignment: 'left' | 'center',
  title: string,
  sectionText: Array<string>,
}

const defaultText = [
  `Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
  eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare`
]

const hello = `Let's Thrive`

const LearnCTASection = ({
  title = 'LearnCTASection',
  alignment = 'left',
  sectionText = defaultText,
}: Props) => {
  return (
    <section className={styles[alignment]}>
      <section className={styles.content}>
        <h2>{title}</h2>
        <p>{sectionText}</p>
        <section className={styles.button}>
          <Button
            buttonText={hello}
            buttonStyle='violet-medium'
          />
        </section>
      </section>
    </section>
  )
}

export default LearnCTASection
