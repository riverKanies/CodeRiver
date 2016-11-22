/* @flow */
import React from 'react'
import styles from './styles'
import Button from 'components/Button'

type Props = {
  alignment: 'defaultLeft' | 'center',
  colorScheme: 'default' | 'white' | 'blue' | 'gray',
  sectionText: Array<string>,
  sectionWidth: 'defaultWidth' | 'fullWidth' | 'twoThirdsWidth' | 'halfWidth',
  title: string,
}

const defaultText = [
  `Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
  eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare`
]

const hello = `Let's Thrive`

const CTASection = ({
  alignment = 'defaultLeft',
  colorScheme = 'default',
  sectionWidth = 'defaultWidth',
  title = 'Section Title',
  sectionText = defaultText
}: Props) => {
  return (
    <section className={styles[colorScheme]}>
      <section className={styles[alignment]}>
        <section className={styles[sectionWidth]}>
          <h2>{title}</h2>
          <section className={styles.sectionContent}>
            <p>{sectionText}</p>
          </section>
          <section className={styles.button}>
            <Button
              buttonText={hello}
              buttonStyle='violet-medium'
            />
          </section>
        </section>
      </section>
    </section>
  )
}

export default CTASection
