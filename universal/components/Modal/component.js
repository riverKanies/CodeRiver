/* @flow */
import React from 'react'
import styles from './styles'
import cx from 'classnames'

type Props = {
  show: boolean,
  onClick: Function,
  content: any
};

const Modal = ({
  show = false,
  onClick = () => {},
  content = <div />
}: Props) => {
  const classes = cx({
    [styles.show]: show,
    [styles.modal]: true
  })

  return (
    <section className={classes} onClick={onClick}>
      <div className={styles.middleWrapper}>
        <section className={styles.modalContent}>
          {content}
          <nav className={styles.closeModal}>
            <svg className={styles.closeButton} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'>
              <title>Close Modal</title>
              <path className={styles.closeBar}
                d='M27.16,29.81l-17-17a1.88,1.88,0,0,1,2.65-2.65l17,17a1.88,1.88,0,0,1-2.65,2.65Z' />
              <path className={styles.closeBar}
                d='M29.81,12.84l-17,17a1.88,1.88,0,0,1-2.65-2.65l17-17a1.88,1.88,0,0,1,2.65,2.65Z' />
            </svg>
          </nav>
        </section>
      </div>
    </section>
  )
}

export default Modal
