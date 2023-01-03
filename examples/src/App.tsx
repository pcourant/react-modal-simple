import React, { useState } from 'react'
import { Modal } from 'react-modal-simple-customizable'

import defaultStyles from './styles/CSSModules/Default.module.css'
import './styles/default.css'

const App = () => {
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)

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
    </div>
  )
}

export default App
