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
  userName,
  logOutAction
}: Props) => {
  if (!email) return null
  return (
    <section className={styles.profile}>
      <header className={styles.greeting}>
        <h1>Welcome, {userName}</h1>
        <h4>Here you can edit your account settings</h4>
      </header>
      <section className={styles.myAccount}>
        <div className={styles.container}>

          <header className={styles.accountHeader}>
            <h3>My Account</h3>
          </header>

          <form className={styles.myProfile}>
            <fieldset className={styles.accountAbout}>
              <div className={styles.inputWrap}>
                <label>Name</label>
                <input type='text' name='name' value='name' placeholder='Name' />
              </div>
              <div className={styles.inputWrap}>
                <label>Email</label>
                <input type='email' name='email' value='email' placeholder='Email' />
              </div>
            </fieldset>
            <fieldset className={styles.accountPreferences}>
              <div className={styles.inputWrap}>
                <input type='checkbox' name='newsletter' value='newsletter' />
                <label>Newsletter</label>
              </div>
              <div className={styles.inputWrap}>
                <input type='checkbox' name='emailsThrive' value='emailsThrive' />
                <label>Send me occasional emails from Thrive Global</label>
              </div>
            </fieldset>
            <fieldset className={styles.save}>
              <input type='submit' value='Save' />
            </fieldset>
          </form>

          <header className={styles.accountHeader}>
            <h3>Change Password</h3>
          </header>

          <form className={styles.changePassword}>
            <fieldset className={styles.password}>
              <div className={styles.inputWrap}>
                <label>Old Password</label>
                <input type='text' name='oldPassword' value='oldPassword' placeholder='Old Password' />
              </div>
              <div className={styles.inputWrap}>
                <label>New Password</label>
                <input type='text' name='newPassword' value='newPassword' placeholder='New Password' />
              </div>
              <div className={styles.inputWrap}>
                <label>Confirm Password</label>
                <input type='text' name='confirmPassword' value='confirmPassword' placeholder='Confirm Password' />
              </div>
            </fieldset>
            <fieldset className={styles.save}>
              <input type='submit' value='Change' />
            </fieldset>
          </form>

        </div>
      </section>
    </section>
  )
}

export default Profile
