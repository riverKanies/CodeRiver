/* @flow */
import React from 'react'
import styles from './styles'
import Button from 'components/Button'

type Props = {
  alignment: 'defaultLeft' | 'center',
  hasTitle: 'titleTrue' | 'titleFalse',
  colorScheme: 'default' | 'white' | 'blue' | 'gray' | 'gradientPurpleTeal' | 'pattern',
  sectionText: Array<string>,
  sectionWidth: 'defaultWidth' | 'fullWidth' | 'twoThirdsWidth' | 'halfWidth' | 'offset',
  sectionContent: 'sectionContent' | 'large',
  title: string,
  button: any
}

const defaultText = [
  `Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
  eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare`
]

const CTASection = ({
  alignment = 'defaultLeft',
  hasTitle = 'titleTrue',
  colorScheme = 'default',
  sectionWidth = 'defaultWidth',
  sectionContent = 'sectionContent',
  title = 'Section Title',
  button = {},
  sectionText = defaultText
}: Props) => {
  return (
    <section className={styles[colorScheme]}>
      <section className={styles[alignment]}>
        <section className={styles[sectionWidth]}>
          <header className={styles[hasTitle]}>
            <h2>{title}</h2>
          </header>
          <section className={styles[sectionContent]}>
            {sectionText.map((paragraph, i) => (<p key={i}>{paragraph}</p>))}
          </section>
          <section className={styles.button}>
            <Button {...button} />
          </section>
        </section>
      </section>
    </section>
  )
}

export default CTASection
