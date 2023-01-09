import React, { MouseEvent, PropsWithChildren, useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import styles from './Modal.module.css'
import transitions from './Transitions.module.css'

interface TransitionsClassNames {
  appear?: string | undefined
  appearActive?: string | undefined
  appearDone?: string | undefined
  enter?: string | undefined
  enterActive?: string | undefined
  enterDone?: string | undefined
  exit?: string | undefined
  exitActive?: string | undefined
  exitDone?: string | undefined
}

interface ModalProps extends PropsWithChildren {
  show?: boolean
  transitionTimeoutMS?: number | { enter?: number; exit?: number; appear?: number }
  onClose?: () => void
  escapeClose?: boolean
  clickClose?: boolean
  className?: string
  overlayClassName?: string
  transitionsClassName?: string | TransitionsClassNames
}
const Modal = ({
  show,
  onClose,
  escapeClose = true,
  clickClose = true,
  transitionTimeoutMS = 300,
  className,
  overlayClassName,
  transitionsClassName,
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

  let transitionsClassNameProp = undefined
  if (transitionsClassName) {
    if (typeof transitionsClassName === 'string') {
      transitionsClassNameProp = transitionsClassName
    } else {
      transitionsClassNameProp = { ...transitionsClassName }
    }
  } else {
    transitionsClassNameProp = { ...transitions }
  }

  return createPortal(
    <CSSTransition
      in={show}
      nodeRef={nodeRef}
      timeout={transitionTimeoutMS}
      classNames={transitionsClassNameProp}
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
