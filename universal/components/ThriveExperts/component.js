/* @flow */
import React from 'react'
import styles from './styles'
import Expert from './Expert/component.js'

import DavidAgus from './assets/expert_david-agus.jpg'
import CharlesCzeisler from './assets/expert_charles-czeisler.jpg'
import SusanDavid from './assets/expert_susan-david.jpg'
import AndreIguodala from './assets/expert_andre-iguodala.jpg'
import AdamGrant from './assets/expert_adam-grant.jpg'
import RichardDavidson from './assets/expert_richard-davidson.jpg'
import JenniferAker from './assets/expert_jennifer-aker.jpg'
import MarkWilliams from './assets/expert_mark-williams.jpg'
import AliRezai from './assets/expert_ali-rezai.jpg'

type Props = {
  title: string
}

// Expert Figure Content
const DavidA = {
  name: 'David B. Agus, M.D.',
  description: [
    `Professor of Medicine & Engineering`,
    `University of South Carolina`
  ],
  image: DavidAgus
}
const CharlesC = {
  name: 'Charles A. Czeisler',
  description: [
    'Director of the Sleep Health Institute',
    'Harvard University'
  ],
  image: CharlesCzeisler
}
const SusanD = {
  name: 'Susan David',
  description: [
    'Award-winning Psychologist, Author of Emotional Agility',
    'Co-Founder of the Institute of Coaching',
    'Harvard Medical School'
  ],
  image: SusanDavid
}
const AndreI = {
  name: 'Andre Iguodala',
  description: [
    'Professional Basketball Player',
    'NBA Finals MVP',
    'Golden State Warriors'
  ],
  image: AndreIguodala
}
const AdamG = {
  name: 'Adam Grant, Ph.D',
  description: [
    'Professor of Organizational Psychology and Best-selling Author',
    'The Wharton School',
    'University of Pennsylvania'
  ],
  image: AdamGrant
}
const RichardD = {
  name: 'Richard Davidson, Ph.D.',
  description: [
    'Professor of Psychology & Psychiatry',
    'University of Wisconsin-Madison'
  ],
  image: RichardDavidson
}
const JennA = {
  name: 'Jennifer Aker, Ph.D',
  description: [
    'Professor of Marketing',
    'Stanford University'
  ],
  image: JenniferAker
}
const MarkW = {
  name: 'Mark Williams, Phil',
  description: [
    'Professor of Clinical Psychology',
    'Oxford University'
  ],
  image: MarkWilliams
}
const AliR = {
  name: 'Ali Rezai, M.D.',
  description: [
    'Director of the Neurological Institute',
    'The Ohio State University'
  ],
  image: AliRezai
}

const ThriveExperts = ({
  title = 'Our Experts'
}: Props) => {
  return (
    <section className={styles.expertSection}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <section className={styles.theExperts}>
          <Expert {...DavidA} />
          <Expert {...CharlesC} />
          <Expert {...SusanD} />
          <Expert {...AndreI} />
          <Expert {...AdamG} />
          <Expert {...RichardD} />
          <Expert {...JennA} />
          <Expert {...MarkW} />
          <Expert {...AliR} />
        </section>
      </div>
    </section>
  )
}

export default ThriveExperts
