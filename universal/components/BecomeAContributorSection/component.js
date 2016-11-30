import React from 'react'
import styles from './styles'
import ContributorItem from 'components/ContributorItem'
const title = 'Become A Contributor'
const text = ['Say hello. E-mail us at info@thriveglobal.com.']
const label = {'label':'Contact Thrive'}
const details = 'We want to feature your voice in The Thrive Journal! E-mail rachel@thriveglobal.com for information on how to become a contributor.'
export const ContributerSection = () => {
    return (
    <section className={styles.SectionContainer}>
        <section className={styles.content}>
          <ContributorItem title={title} sectionText={text} label={label} details={details}/> 
        </section>
    </section> 

  )
}

export default ContributerSection
