import React, { useState } from 'react'
import { Modal } from '../../src'

const App = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className='App'>
      <div>
        <h2>Default modal</h2>
        <button type='button' onClick={() => setShowModal(true)}>
          Show Modal
        </button>
        <Modal onClose={() => setShowModal(false)} show={showModal} title={<h2>Modal title</h2>}>
          <p>modal paragraph body</p>
        </Modal>
      </div>
      <hr />
    </div>
  )
}

export default App
