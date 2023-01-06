import React, { useState } from 'react'
import { Modal } from 'react-modal-simple-customizable'

import defaultStyles from './styles/CSSModules/Default.module.css'
import './styles/default.css'

const App = () => {
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  const [show5, setShow5] = useState(false)

  return (
    <div className='App'>
      <div>
        <h2>Default modal</h2>
        <button type='button' onClick={() => setShow1(true)}>
          Show Modal 1
        </button>
        <Modal onClose={() => setShow1(false)} show={show1}>
          <div className='modalHeader'>
            <h1 className='modalTitle'>Modal title</h1>
          </div>
          <p className='modalBody'>modal paragraph body</p>
          <div className='modalFooter'>
            <button type='button' className='modalCloseButton' onClick={() => setShow1(false)}>
              Close
            </button>
          </div>
        </Modal>
      </div>
      <hr />
      {/* ***************************************************************************************** */}
      <div>
        <h2>CSS override modal style</h2>
        <button type='button' onClick={() => setShow2(true)}>
          Show Modal 2
        </button>
        <Modal onClose={() => setShow2(false)} show={show2} className='modal' overlayClassName='overlay'>
          <div className='modalHeader'>
            <h1 className='modalTitle'>Modal title</h1>
          </div>
          <p className='modalBody'>modal paragraph body</p>
          <div className='modalFooter'>
            <button type='button' className='modalCloseButton' onClick={() => setShow2(false)}>
              Close
            </button>
          </div>
        </Modal>
      </div>
      <hr />
      {/* ***************************************************************************************** */}
      <div>
        <h2>CSS modules override modal style</h2>
        <button type='button' onClick={() => setShow3(true)}>
          Show Modal 3
        </button>
        <Modal
          onClose={() => setShow3(false)}
          show={show3}
          className={defaultStyles.modal}
          overlayClassName={defaultStyles.overlay}
        >
          <div className={defaultStyles.modalHeader}>
            <h1 className={defaultStyles.modalTitle}>Modal title</h1>
          </div>
          <p className={defaultStyles.modalBody}>modal paragraph body</p>
          <div className={defaultStyles.modalFooter}>
            <button type='button' className={defaultStyles.modalCloseButton} onClick={() => setShow3(false)}>
              Close
            </button>
          </div>
        </Modal>
      </div>
      <hr />
      {/* ***************************************************************************************** */}
      <div>
        <h2>Login form & events</h2>
        <button type='button' onClick={() => setShow4(true)}>
          Show Modal 4
        </button>
        <Modal onClose={() => setShow4(false)} show={show4}>
          <div className={defaultStyles.modalHeader}>
            <h3 className={defaultStyles.modalTitle}>Please login to continue</h3>
          </div>
          <form action=''>
            <div className={defaultStyles.modalBody}>
              <label htmlFor='username'>username </label>
              <input type='text' name='username' id='username'></input>
              <br />
              <br />
              <label htmlFor='password'>password </label>
              <input type='password' name='password' id='password'></input>
            </div>
            <div className={defaultStyles.modalFooter}>
              <button
                type='submit'
                className={defaultStyles.modalConnectButton}
                onClick={(e) => {
                  e.preventDefault()
                  alert(`You clicked submit`)
                }}
              >
                Connect
              </button>
              <button type='button' className={defaultStyles.modalCloseButton} onClick={() => setShow4(false)}>
                Cancel
              </button>
            </div>
          </form>
        </Modal>
      </div>
      <hr />
      {/* ***************************************************************************************** */}
      <div>
        <h2>The un-closable window</h2>
        <button type='button' onClick={() => setShow5(true)}>
          Show Modal 5
        </button>
        <Modal show={show5} onClose={() => setShow5(false)} escapeClose={false} clickClose={false}>
          <p className='modalBody'>
            If you do this, be sure to provide the user with an alternate method of
            <a href='#' onClick={() => setShow5(false)}>
              closing the window
            </a>
            .
          </p>
          <p className='modalBody'>
            Use a button element instead. In general, you should only use a hyperlink for navigation to a real URL,
            <a
              href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#onclick_events'
              target='_blank'
              rel='noopener noreferrer'
            >
              cf. mdn doc warning.
            </a>
          </p>
        </Modal>
      </div>
      <hr />
      {/* ***************************************************************************************** */}
    </div>
  )
}

export default App
