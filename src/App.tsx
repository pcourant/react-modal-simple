import React, { useState } from 'react';
import { Modal } from 'react-modal-simple-customizable';

import { CodeBlock } from 'react-code-blocks';

import * as styles from './styles/Modal.module.css';
import * as transitions from './styles/Transitions.module.css';
import './styles/Modal.css';

const App = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6_1, setShow6_1] = useState(false);
  const [show6_2, setShow6_2] = useState(false);
  const [show6_3, setShow6_3] = useState(false);
  const [show6bis_1, setShow6bis_1] = useState(false);
  const [show6bis_2, setShow6bis_2] = useState(false);
  const [show6bis_3, setShow6bis_3] = useState(false);
  const [show7_1, setShow7_1] = useState(false);
  const [show7_2, setShow7_2] = useState(false);

  return (
    <div className="App">
      <h1>react-modal-simple-customizable</h1>
      <div>
        <h2>Install</h2>
        <p>
          Refer to the
          <a href="https://github.com/pcourant/react-modal-simple-customizable#readme">
            README
          </a>
          .
        </p>
      </div>
      <hr />
      {/* ***************************************************************************************** */}
      <div>
        <h2>Default modal</h2>
        <button type="button" onClick={() => setShow1(true)}>
          Show Modal 1
        </button>
        <br />
        <br />
        <CodeBlock
          language="jsx"
          text={`const [show1, setShow1] = useState(false);
<button type='button' onClick={() => setShow1(true)}>Show Modal 1</button>
<Modal onClose={() => setShow1(false)} show={show1}>
... 
</Modal>`}
        />

        <Modal onClose={() => setShow1(false)} show={show1}>
          <div className="modalHeader">
            <h1 className="modalTitle">Modal title</h1>
          </div>
          <p className="modalBody">modal paragraph body</p>
          <div className="modalFooter">
            <button
              type="button"
              className="modalCloseButton"
              onClick={() => setShow1(false)}
            >
              Close
            </button>
          </div>
        </Modal>
      </div>
      <hr />
      {/* ***************************************************************************************** */}
      <div>
        <h2>CSS override modal style</h2>
        <button type="button" onClick={() => setShow2(true)}>
          Show Modal 2
        </button>
        <br />
        <br />
        <CodeBlock
          language="jsx"
          text={`import './styles/Modal.css'
<Modal ... className='modal' overlayClassName='overlay'>`}
        />
        <Modal
          onClose={() => setShow2(false)}
          show={show2}
          className="modal"
          overlayClassName="overlay"
        >
          <div className="modalHeader">
            <h1 className="modalTitle">Modal title</h1>
          </div>
          <p className="modalBody">modal paragraph body</p>
          <div className="modalFooter">
            <button
              type="button"
              className="modalCloseButton"
              onClick={() => setShow2(false)}
            >
              Close
            </button>
          </div>
        </Modal>
      </div>
      <hr />
      {/* ***************************************************************************************** */}
      <div>
        <h2>CSS modules override modal style</h2>
        <button type="button" onClick={() => setShow3(true)}>
          Show Modal 3
        </button>
        <br />
        <br />
        <CodeBlock
          language="jsx"
          text={`import styles from './styles/Modal.module.css'
<Modal ... className={styles.modal} overlayClassName={styles.overlay}>`}
        />
        <Modal
          onClose={() => setShow3(false)}
          show={show3}
          className={styles.modal}
          overlayClassName={styles.overlay}
        >
          <div className={styles.modalHeader}>
            <h1 className={styles.modalTitle}>Modal title</h1>
          </div>
          <p className={styles.modalBody}>modal paragraph body</p>
          <div className={styles.modalFooter}>
            <button type="button" onClick={() => setShow3(false)}>
              Close
            </button>
          </div>
        </Modal>
      </div>
      <hr />
      {/* ***************************************************************************************** */}
      <div>
        <h2>Login form & events</h2>
        <button type="button" onClick={() => setShow4(true)}>
          Show Modal 4
        </button>
        <Modal onClose={() => setShow4(false)} show={show4}>
          <div className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>Please login to continue</h3>
          </div>
          <form action="">
            <div className={styles.modalBody}>
              <label htmlFor="username">username </label>
              <input type="text" name="username" id="username"></input>
              <br />
              <br />
              <label htmlFor="password">password </label>
              <input type="password" name="password" id="password"></input>
            </div>
            <div className={styles.modalFooter}>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  alert(`You clicked submit`);
                }}
              >
                Connect
              </button>
              <button type="button" onClick={() => setShow4(false)}>
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
        <button type="button" onClick={() => setShow5(true)}>
          Show Modal 5
        </button>
        <br />
        <br />
        <CodeBlock
          language="jsx"
          text={`<Modal ... escapeClose={false} clickClose={false}>`}
        />
        <Modal
          show={show5}
          onClose={() => setShow5(false)}
          escapeClose={false}
          clickClose={false}
        >
          <p className="modalBody">
            If you do this, be sure to provide the user with an alternate method
            of
            <a href="#" onClick={() => setShow5(false)}>
              closing the window
            </a>
            .
          </p>
          <p className="modalBody">
            Use a button element instead. In general, you should only use a
            hyperlink for navigation to a real URL,
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#onclick_events"
              target="_blank"
              rel="noopener noreferrer"
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
        <p>By default it stacks multiple modals.</p>
        <button type="button" onClick={() => setShow6_1(true)}>
          Show Modal 6
        </button>
        <br />
        <br />
        <p>
          To close previous modals. Use <code>onClick</code> event callback.
        </p>
        <button type="button" onClick={() => setShow6bis_1(true)}>
          Show Modal 6bis
        </button>
        <br />
        <br />
        <CodeBlock
          language="jsx"
          text={`<Modal show={show6bis_2} onClose={() => setShow6bis_2(false)} className='modal2'>
...
<button type='button' onClick={() => {setShow6bis_1(false); setShow6bis_2(true)}}>Next</button>
...
</Modal>`}
        />
        <Modal
          show={show6_1}
          onClose={() => setShow6_1(false)}
          className="modal1"
        >
          <div className="modalHeader">
            <h1 className="modalTitle">First modal</h1>
          </div>
          <p className="modalBody">Open the second modal</p>
          <div className="modalFooter">
            <button type="button" onClick={() => setShow6_2(true)}>
              Next
            </button>
            <button
              type="button"
              className="modalCloseButton"
              onClick={() => setShow6_1(false)}
            >
              Close
            </button>
          </div>
        </Modal>
        <Modal
          show={show6_2}
          onClose={() => setShow6_2(false)}
          className="modal2"
        >
          <div className="modalHeader">
            <h1 className="modalTitle">Second modal</h1>
          </div>
          <p className="modalBody">Open the third modal</p>
          <div className="modalFooter">
            <button type="button" onClick={() => setShow6_3(true)}>
              Next
            </button>
            <button
              type="button"
              className="modalCloseButton"
              onClick={() => setShow6_2(false)}
            >
              Close
            </button>
          </div>
        </Modal>
        <Modal
          show={show6_3}
          onClose={() => setShow6_3(false)}
          className="modal3"
        >
          <div className="modalHeader">
            <h1 className="modalTitle">Third modal</h1>
          </div>
          <p className="modalBody">You get the idea.</p>
          <div className="modalFooter">
            <button
              type="button"
              className="modalCloseButton"
              onClick={() => setShow6_3(false)}
            >
              Close
            </button>
          </div>
        </Modal>
        <Modal
          show={show6bis_1}
          onClose={() => setShow6bis_1(false)}
          className="modal1"
        >
          <div className="modalHeader">
            <h1 className="modalTitle">First modal</h1>
          </div>
          <p className="modalBody">Open the second modal</p>
          <div className="modalFooter">
            <button
              type="button"
              onClick={() => {
                setShow6bis_1(false);
                setShow6bis_2(true);
              }}
            >
              Next
            </button>
            <button
              type="button"
              className="modalCloseButton"
              onClick={() => setShow6bis_1(false)}
            >
              Close
            </button>
          </div>
        </Modal>
        <Modal
          show={show6bis_2}
          onClose={() => setShow6bis_2(false)}
          className="modal2"
        >
          <div className="modalHeader">
            <h1 className="modalTitle">Second modal</h1>
          </div>
          <p className="modalBody">Open the third modal</p>
          <div className="modalFooter">
            <button
              type="button"
              onClick={() => {
                setShow6bis_2(false);
                setShow6bis_3(true);
              }}
            >
              Next
            </button>
            <button
              type="button"
              className="modalCloseButton"
              onClick={() => setShow6bis_2(false)}
            >
              Close
            </button>
          </div>
        </Modal>
        <Modal
          show={show6bis_3}
          onClose={() => setShow6bis_3(false)}
          className="modal3"
        >
          <div className="modalHeader">
            <h1 className="modalTitle">Third modal</h1>
          </div>
          <p className="modalBody">You get the idea.</p>
          <div className="modalFooter">
            <button
              type="button"
              className="modalCloseButton"
              onClick={() => setShow6bis_3(false)}
            >
              Close
            </button>
          </div>
        </Modal>
      </div>
      <hr />
      {/* ***************************************************************************************** */}
      <div>
        <h2>Transitions</h2>
        <p>
          The transitions for when the modal is opened or closed is implemented
          using
          <a href="https://reactcommunity.org/react-transition-group/css-transition">
            CSSTransition
          </a>
          .
        </p>
        <p>
          Please inform <code>{`<Modal />`}</code> about the transition time
          required for the animation.
        </p>{' '}
        <p>
          Like this : <code>{`<Modal transitionTimeoutMS={2000}/>`}</code>
        </p>
        <p>
          Or individually :{' '}
          <code>{`<Modal transitionTimeoutMS={{appear: 500, enter: 300, exit: 500}}/>`}</code>
        </p>
        <p>
          More information
          <a href="https://reactcommunity.org/react-transition-group/transition#Transition-prop-timeout">
            here
          </a>
        </p>
        <h3>Overriding with CSS</h3>
        <p>
          More info
          <a href="http://reactcommunity.org/react-transition-group/css-transition#CSSTransition-prop-classNames">
            here
          </a>
        </p>
        <button type="button" onClick={() => setShow7_1(true)}>
          Show Modal 7.1
        </button>
        <br />
        <br />
        <CodeBlock
          language="jsx"
          text={`import './styles/Modal.css'
<Modal ... transitionTimeoutMS={2000} transitionsClassName='scale'>`}
        />
        <Modal
          onClose={() => setShow7_1(false)}
          show={show7_1}
          transitionTimeoutMS={2000}
          transitionsClassName="scale"
        >
          <div className="modalHeader">
            <h1 className="modalTitle">Modal title</h1>
          </div>
          <p className="modalBody">
            Modal opening with scale transition CSS override
          </p>
          <div className="modalFooter">
            <button
              type="button"
              className="modalCloseButton"
              onClick={() => setShow7_1(false)}
            >
              Close
            </button>
          </div>
        </Modal>
        {/* ---------------------------------------------------------------- */}
        <h3>Overriding with CSS modules</h3>
        <p>
          More info
          <a href="http://reactcommunity.org/react-transition-group/css-transition#CSSTransition-prop-classNames">
            here
          </a>
        </p>
        <button type="button" onClick={() => setShow7_2(true)}>
          Show Modal 7.2
        </button>
        <br />
        <br />
        <CodeBlock
          language="jsx"
          text={`import transitions from './styles/Transitions.module.css'
<Modal ...transitionTimeoutMS={2000} transitionsClassName={transitions} >`}
        />
        <Modal
          onClose={() => setShow7_2(false)}
          show={show7_2}
          transitionTimeoutMS={2000}
          transitionsClassName={transitions}
        >
          <div className="modalHeader">
            <h1 className="modalTitle">Modal title</h1>
          </div>
          <p className="modalBody">modal paragraph body</p>
          <div className="modalFooter">
            <button
              type="button"
              className="modalCloseButton"
              onClick={() => setShow7_2(false)}
            >
              Close
            </button>
          </div>
        </Modal>
      </div>
      <hr />
      {/* ***************************************************************************************** */}
    </div>
  );
};

export default App;
