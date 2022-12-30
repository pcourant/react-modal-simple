import React, { PropsWithChildren, ReactNode, useEffect } from 'react'

import styles from './Modal.module.css'

interface ModalProps extends PropsWithChildren {
  title?: ReactNode
  show?: boolean
  onClose?: () => void
}
const Modal = ({ show, onClose, title, children }: ModalProps) => {
  // const keyDownHandler = useCallback(
  //   (event: KeyboardEvent) => {
  //     console.log('User pressed: ', event.key)

  //     if (event.key === 'Escape') {
  //       event.preventDefault()

  //       if (onClose) onClose()
  //     }
  //   },
  //   [onClose],
  // )

  useEffect(() => {
    console.log('useEffect')

    // window.addEventListener('keydown', keyDownHandler)

    // 👇️ clean up event listener
    return () => {
      // window.removeEventListener('keydown', keyDownHandler)
    }
  }, [])

  if (!show) {
    return null
  }
  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>{title}</div>
        <div className={styles.modalBody}>{children}</div>
        <div className={styles.modalFooter}>
          <button type='button' className='button' onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
