/* @flow */
import React from 'react'
import styles from './styles'
import IconWithText from 'components/IconWithText'

type Props = {
  title: string,
  details: Array<string>
};

const defaultDetails = [
  `Making a sustained behavioral change happens when we no longer feel we’re
  having to work to do something other than what we’d normally do.
  That is, it’s when we find a new equilibrium and create a new norm.`
]

const shortDescription = [
  `This is a short description`
]

const mediumDescription = [
  `Cras mattis consectetur purus sit amet fermentum Fusce dapibus, tellus ac
  cursus commodo, tortor mauris condimentum nibh ut fermentum massa justo sit amet risus.`
]

const BehaviorChangeSection = ({ title = 'Behavior Change', details = defaultDetails }: Props) => {
  return (
    <section className={styles.container}>
      <section className={styles.title}>
        <h2>{title}</h2>
        {details.map((paragraph, i) => (<div key={i} className={styles.details}>{paragraph}</div>))}
      </section>
      <section className={styles.row}>
        <IconWithText description={shortDescription} />
        <IconWithText description={shortDescription} />
        <IconWithText description={shortDescription} />
        <IconWithText description={mediumDescription} />
        <IconWithText description={mediumDescription} />
        <IconWithText description={mediumDescription} />
      </section>
    </section>
  )
}

export default BehaviorChangeSection
