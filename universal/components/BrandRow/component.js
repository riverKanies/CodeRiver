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
  link: string | null,
  style: string | null
}

const Logo = ({
  logoImage = logo_one,
  link,
  style
}: LogoType) => {
  if (link) {
    return (
      <section className={styles[style]}>
        <a href={link} target='_blank'>
          <img className={styles.image} src={logoImage} />
        </a>
      </section>
    )
  }
  return (
    <section className={styles[style]}>
      <img className={styles.image} src={logoImage} />
    </section>
  )
}

const defaultLogos = [
  { logoImage: logo_one, link: null, style: null },
  { logoImage: logo_two, link: null, style: null },
  { logoImage: logo_three, link: null, style: null },
  { logoImage: logo_four, link: null, style: null },
  { logoImage: logo_five, link: null, style: null }
]
const styleSwitch = {
  '4': 'quad',
  '3': 'trip'
}
function BrandRow ({ logos = defaultLogos }: { logos: LogoType[] }) {
  const ss = styleSwitch[logos.length] || 'default'
  return (
    <section className={styles.container}>
      <section className={styles.content}>
        {logos.map((logo, i) => <Logo key={i} {...logo} style={ss} />)}
      </section>
    </section>
  )
}

export default BrandRow
