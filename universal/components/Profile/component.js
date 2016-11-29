/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  email: string,
  userName: string,
  logOutAction: Function
}

const Profile = ({
  email,
  userName = 'Name',
  logOutAction
}: Props) => {
  if (!email) return null
  return (
    <section className={styles.profile}>
      <header className={styles.greeting}>
        <h1 className={styles.h1}>Welcome, {userName}</h1>
        <h4 className={styles.h4}>Here you can edit your account settings</h4>
      </header>
      <section className={styles.myAccount}>
        <div className={styles.container}>

          <header className={styles.accountHeader}>
            <h3>My Account</h3>
          </header>

          <form className={styles.myProfile}>
            <fieldset className={styles.accountAbout}>
              <div className={styles.inputWrap}>
                <label className={styles.label}>Name</label>
                <input className={styles.input} type='text' name='name' placeholder='Name' />
              </div>
              <div className={styles.inputWrap}>
                <label className={styles.label}>Email</label>
                <input className={styles.input} type='email' name='email' placeholder='Email' />
              </div>
            </fieldset>
            <fieldset className={styles.accountPreferences}>
              <div className={styles.inputWrap}>
                <input className={styles.check} type='checkbox' name='newsletter' />
                <label className={styles.label}>Newsletter</label>
              </div>
              <div className={styles.inputWrap}>
                <input className={styles.check} type='checkbox' name='emailsThrive' />
                <label className={styles.label}>Send me occasional emails from Thrive Global</label>
              </div>
            </fieldset>
            <fieldset className={styles.save}>
              <input className={styles.input} type='submit' />
            </fieldset>
          </form>

          <header className={styles.accountHeader}>
            <h3>Change Password</h3>
          </header>

          <form className={styles.changePassword}>
            <fieldset className={styles.password}>
              <div className={styles.inputWrap}>
                <label className={styles.label}>Old Password</label>
                <input className={styles.input} type='text' name='oldPassword' placeholder='Old Password' />
              </div>
              <div className={styles.inputWrap}>
                <label className={styles.label}>New Password</label>
                <input className={styles.input} type='text' name='newPassword' placeholder='New Password' />
              </div>
              <div className={styles.inputWrap}>
                <label className={styles.label}>Confirm Password</label>
                <input className={styles.input} type='text' name='confirmPassword' placeholder='Confirm Password' />
              </div>
            </fieldset>
            <fieldset className={styles.save}>
              <input className={styles.input} type='submit' value='Change' />
            </fieldset>
          </form>

        </div>
      </section>
    </section>
  )
}

export default Profile
