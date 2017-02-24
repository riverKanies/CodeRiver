/* @flow */
import React from 'react'
import ProfileForm from 'components/ProfileForm'
import PasswordForm from 'components/PasswordForm'
import styles from './styles'
import { renderSelectedQuote } from 'components/QuoteCard'

type Props = {
  email: string,
  name: string,
  logOutAction: Function
}

const Profile = ({
  email,
  name,
  quote,
  query
}: Props) => {
  if (!email) return null
  const displayName = name || email
  return (
    <section className={styles.profile}>
      <header className={styles.greeting}>
        <h1 className={styles.h1}>Welcome, {displayName}</h1>
        <h4 className={styles.h4}>Here you can edit your account settings</h4>
      </header>
      <section className={styles.myAccount}>
        <div className={styles.container}>
          <header className={styles.accountHeader}>
            <h3>My Account</h3>
          </header>
          {renderSelectedQuote(quote)}
          {renderQueryData(query)}
          <ProfileForm />
          <header className={styles.accountHeader}>
            <h3>Change Password</h3>
          </header>
          <PasswordForm />
        </div>
      </section>
    </section>
  )
}

function renderQueryData(query) {
  if (!query.state) return ''
  return(<div>
    <p>Personal Details:</p>
    <table className={styles.table}>
      <tr>
        <td className={styles.cell}>State:</td>
        <td className={styles.cell}>{query.state}</td>
      </tr>
      <tr>
        <td className={styles.cell}>Birthdate:</td>
        <td className={styles.cell}>{query.birthdate}</td>
      </tr>
      <tr>
        <td className={styles.cell}>Gender:</td>
        <td className={styles.cell}>{renderGender(query.gender)}</td>
      </tr>
      <tr>
        <td className={styles.cell}>Tobacco Use:</td>
        <td className={styles.cell}>{renderSmoker(query.smoker)}</td>
      </tr>
      <tr>
        <td className={styles.cell}>Coverage Amount (Last Selected):</td>
        <td className={styles.cell}>${query.coverage}</td>
      </tr>
      <tr>
        <td className={styles.cell}>Term Duration (Last Selected):</td>
        <td className={styles.cell}>{query.term} yrs</td>
      </tr>
    </table>
  </div>)
}
function renderGender(gender) {
  if (gender == 'f') return 'Female'
  return 'Male'
}
function renderSmoker(smoker) {
  if (smoker == 'false') return 'Non-Smoker'
  return 'Smoker'
}

export default Profile
