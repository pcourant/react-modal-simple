import React, { useState } from 'react'
import { Modal } from 'react-modal-simple-customizable'

import { CodeBlock, CopyBlock } from 'react-code-blocks'

import defaultStyles from './styles/CSSModules/Default.module.css'
import './styles/default.css'

const App = () => {
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  const [show5, setShow5] = useState(false)
  const [show6, setShow6] = useState(false)
  const [show6_2, setShow6_2] = useState(false)
  const [show6_3, setShow6_3] = useState(false)
  const [show6bis, setShow6bis] = useState(false)
  const [show6bis_2, setShow6bis_2] = useState(false)
  const [show6bis_3, setShow6bis_3] = useState(false)

  return (
    <div className='App'>
      <div>
        <h2>Default modal</h2>
        <button type='button' onClick={() => setShow1(true)}>
          Show Modal 1
        </button>
        <br />
        <br />
        <CodeBlock
          language='jsx'
          text={`const [show1, setShow1] = useState(false);
<Modal onClose={() => setShow1(false)} show={show1}>
... 
</Modal>`}
        />

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
        <br />
        <br />
        <CodeBlock
          language='jsx'
          text={`import './styles/default.css'
<Modal ... className='modal' overlayClassName='overlay'>`}
        />
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
        <br />
        <br />
        <CodeBlock
          language='jsx'
          text={`import defaultStyles from './styles/CSSModules/Default.module.css'
<Modal ... className={defaultStyles.modal} overlayClassName={defaultStyles.overlay}>`}
        />
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
        <br />
        <br />
        <CodeBlock language='jsx' text={`<Modal ... escapeClose={false} clickClose={false}>`} />
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
      <div>
        <h2>Multiple Modals</h2>
        <button type='button' onClick={() => setShow6(true)}>
          Show Modal 6
        </button>
        <br />
        <br />
        <p>
          By default it stacks multiple modals. Use <code>onClick</code> event to close the previous modal.
        </p>
        <button type='button' onClick={() => setShow6bis(true)}>
          Show Modal 6bis
        </button>
        <br />
        <br />
        <CodeBlock
          language='jsx'
          text={`<button type='button' onClick={() => {setShow6bis(false); setShow6bis_2(true)}}>Next</button>`}
        />
        <Modal show={show6} onClose={() => setShow6(false)} className='modal1'>
          <div className='modalHeader'>
            <h1 className='modalTitle'>First modal</h1>
          </div>
          <p className='modalBody'>Open the second modal</p>
          <div className='modalFooter'>
            <button type='button' onClick={() => setShow6_2(true)}>
              Next
            </button>
            <button type='button' className='modalCloseButton' onClick={() => setShow6(false)}>
              Close
            </button>
          </div>
        </Modal>
        <Modal show={show6_2} onClose={() => setShow6_2(false)} className='modal2'>
          <div className='modalHeader'>
            <h1 className='modalTitle'>Second modal</h1>
          </div>
          <p className='modalBody'>Open the third modal</p>
          <div className='modalFooter'>
            <button type='button' onClick={() => setShow6_3(true)}>
              Next
            </button>
            <button type='button' className='modalCloseButton' onClick={() => setShow6_2(false)}>
              Close
            </button>
          </div>
        </Modal>
        <Modal show={show6_3} onClose={() => setShow6_3(false)} className='modal3'>
          <div className='modalHeader'>
            <h1 className='modalTitle'>Third modal</h1>
          </div>
          <p className='modalBody'>You get the idea.</p>
          <div className='modalFooter'>
            <button type='button' className='modalCloseButton' onClick={() => setShow6_3(false)}>
              Close
            </button>
          </div>
        </Modal>
        <Modal show={show6bis} onClose={() => setShow6bis(false)} className='modal1'>
          <div className='modalHeader'>
            <h1 className='modalTitle'>First modal</h1>
          </div>
          <p className='modalBody'>Open the second modal</p>
          <div className='modalFooter'>
            <button
              type='button'
              onClick={() => {
                setShow6bis(false)
                setShow6bis_2(true)
              }}
            >
              Next
            </button>
            <button type='button' className='modalCloseButton' onClick={() => setShow6bis(false)}>
              Close
            </button>
          </div>
        </Modal>
        <Modal show={show6bis_2} onClose={() => setShow6bis_2(false)} className='modal2'>
          <div className='modalHeader'>
            <h1 className='modalTitle'>Second modal</h1>
          </div>
          <p className='modalBody'>Open the third modal</p>
          <div className='modalFooter'>
            <button
              type='button'
              onClick={() => {
                setShow6bis_2(false)
                setShow6bis_3(true)
              }}
            >
              Next
            </button>
            <button type='button' className='modalCloseButton' onClick={() => setShow6bis_2(false)}>
              Close
            </button>
          </div>
        </Modal>
        <Modal show={show6bis_3} onClose={() => setShow6bis_3(false)} className='modal3'>
          <div className='modalHeader'>
            <h1 className='modalTitle'>Third modal</h1>
          </div>
          <p className='modalBody'>You get the idea.</p>
          <div className='modalFooter'>
            <button type='button' className='modalCloseButton' onClick={() => setShow6bis_3(false)}>
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
