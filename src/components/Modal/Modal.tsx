import React, { PropsWithChildren, useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import styles from './Modal.module.css'
import transitions from './Transitions.module.css'

// interface ModalClassNames {
//   appear?: string | undefined
//   appearActive?: string | undefined
//   appearDone?: string | undefined
//   enter?: string | undefined
//   enterActive?: string | undefined
//   enterDone?: string | undefined
//   exit?: string | undefined
//   exitActive?: string | undefined
//   exitDone?: string | undefined
// }

interface ModalProps extends PropsWithChildren {
  show?: boolean
  transitionTimeout?: number | { enter?: number; exit?: number }
  onClose?: () => void
  className?: string
  overlayClassName?: string
}
const Modal = ({ show, onClose, transitionTimeout = 300, className, overlayClassName, children }: ModalProps) => {
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
    <CSSTransition
      in={show}
      nodeRef={nodeRef}
      timeout={transitionTimeout}
      classNames={{ ...transitions }}
      unmountOnExit
    >
      <div ref={nodeRef} className={overlayClassName ? overlayClassName : styles.overlay} onClick={onClose}>
        {/* <h1>TEST UPDATE</h1> */}
        <div className={className ? className : styles.modal} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </CSSTransition>,
    rootElement,
  )
}

export default Modal
