/* @flow */
import React from 'react'
import styles from './styles'
import logo_one from './assets/logo_one.jpg'
import logo_two from './assets/logo_two.jpg'
import logo_three from './assets/logo_three.jpg'
import logo_four from './assets/logo_four.jpg'
import logo_five from './assets/logo_five.jpg'

type Props = {
  logoImage: any
}

const Logo = ({
  logoImage = logo_one
}: Props) => {
  return (
    <section className={styles.brands}>
      {/* <figure className={styles.imageWrap}> */}
      <img className={styles.image} src={logoImage} />
      {/* </figure> */}
    </section>
  )
}

class BrandRow extends React.Component {
  props: Props
  render () {
    return (
      <section className={styles.container}>
        <section className={styles.content}>
          <Logo
            logoImage={logo_one}
          />
          <Logo
            logoImage={logo_two}
          />
          <Logo
            logoImage={logo_three}
          />
          <Logo
            logoImage={logo_four}
          />
          <Logo
            logoImage={logo_five}
          />
        </section>
      </section>
    )
  }
}

export default BrandRow
