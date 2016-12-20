/* @flow */
import React from 'react'
import styles from './styles'
import logo_one from './assets/logo_one.jpg'
import logo_two from './assets/logo_two.jpg'
import logo_three from './assets/logo_three.jpg'
import logo_four from './assets/logo_four.jpg'
import logo_five from './assets/logo_five.jpg'

type LogoType = {
  logoImage: any,
  link: string | null
}

const Logo = ({
  logoImage = logo_one,
  link
}: LogoType) => {
  if (link) {
    return (
      <section className={styles.brands}>
        <a href={link} target='_blank'>
          <img className={styles.image} src={logoImage} />
        </a>
      </section>
    )
  }
  return (
    <section className={styles.brands}>
      <img className={styles.image} src={logoImage} />
    </section>
  )
}

const defaultLogos = [
  { logoImage: logo_one, link: null },
  { logoImage: logo_two, link: null },
  { logoImage: logo_three, link: null },
  { logoImage: logo_four, link: null },
  { logoImage: logo_five, link: null }
]

function BrandRow ({ logos = defaultLogos }: { logos: LogoType[] }) {
  return (
    <section className={styles.container}>
      <section className={styles.content}>
        {logos.map((logo, i) => <Logo key={i} {...logo} />)}
      </section>
    </section>
  )
}

export default BrandRow
