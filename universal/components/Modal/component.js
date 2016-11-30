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
    <div className={classes} onClick={onClick}>
      <div className={styles.middleWrapper}>
        <div className={styles.modalContent}>
          {content}
        </div>
      </div>
    </div>
  )
}

export default Modal
