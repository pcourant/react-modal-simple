import React, { useState } from 'react'
import { Modal } from 'react-modal-simple-customizable'

import defaultStyles from './styles/CSSModules/Default.module.css'

const App = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className='App'>
      <div>
        <h2>Default modal</h2>
        <button type='button' onClick={() => setShowModal(true)}>
          Show Modal
        </button>
        <Modal onClose={() => setShowModal(false)} show={showModal}>
          <div className={defaultStyles.modalHeader}>
            <h1 className={defaultStyles.modalTitle}>Modal title</h1>
          </div>
          <p className={defaultStyles.modalBody}>modal paragraph body</p>
          <div className={defaultStyles.modalFooter}>
            <button type='button' className={defaultStyles.modalCloseButton} onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </Modal>
      </div>
      <hr />
    </div>
  )
}

export default App
