import React, { PropsWithChildren, ReactNode, useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import styles from './Modal.module.css'
import fade from './Fade.module.css'

interface ModalProps extends PropsWithChildren {
  title?: ReactNode
  show?: boolean
  onClose?: () => void
}
const Modal = ({ show, onClose, title, children }: ModalProps) => {
  const nodeRef = useRef(null)
  const keyDownHandler = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()

        if (onClose) onClose()
      }
    },
    [onClose],
  )

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler)

    // clean up event listener when component is unmounted
    return () => {
      window.removeEventListener('keydown', keyDownHandler)
    }
  }, [keyDownHandler])

  const rootElement = document.getElementById('root')
  if (!rootElement) {
    throw new Error('Your App should contain a html with root id to use Modal component correctly')
  }

  return createPortal(
    <CSSTransition in={show} nodeRef={nodeRef} timeout={300} classNames={{ ...fade }} unmountOnExit>
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
    </CSSTransition>,
    rootElement,
  )
}

export default Modal
