import React, { MouseEvent, PropsWithChildren, useCallback, useEffect, useRef } from 'react'
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
  escapeClose?: boolean
  clickClose?: boolean
  className?: string
  overlayClassName?: string
}
const Modal = ({
  show,
  onClose,
  escapeClose = true,
  clickClose = true,
  transitionTimeout = 300,
  className,
  overlayClassName,
  children,
}: ModalProps) => {
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

  const handleClickOverlay = useCallback(
    (event: MouseEvent) => {
      event.stopPropagation()

      if (onClose && clickClose) onClose()
    },
    [clickClose, onClose],
  )

  useEffect(() => {
    if (escapeClose) window.addEventListener('keydown', keyDownHandler)

    // clean up event listener when component is unmounted
    return () => {
      if (escapeClose) window.removeEventListener('keydown', keyDownHandler)
    }
  }, [escapeClose, keyDownHandler])

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
      <div ref={nodeRef} className={overlayClassName ? overlayClassName : styles.overlay} onClick={handleClickOverlay}>
        <div className={className ? className : styles.modal} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </CSSTransition>,
    rootElement,
  )
}

export default Modal
