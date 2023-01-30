# react-modal-simple-customizable

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

It is simple React modal dialog which can be fully and easily customized

[**Live Demo**](https://pcourant.github.io/react-modal-simple-customizable/)

## Installation:

```bash
npm install react-modal-simple-customizable
```

or

```bash
yarn add react-modal-simple-customizable
```

or

```bash
pnpm add react-modal-simple-customizable
```

## Usage :

Add `Modal` to your component:

```js
import React, { useState } from 'react'
import { Modal } from 'react-modal-simple-customizable'

const App = () => {
  const [showModal, setShowModal] = useState(false)

  const onCloseHandler = () => setShowModal(false)

  return (
    <div className='App'>
      <button type='button' onClick={() => setShowModal(true)}>
        Show Modal
      </button>
      <Modal onClose={onCloseHandler} show={showModal}>
        <h1>Modal title</h1>
        <p>modal paragraph</p>
        <button type='button' onClick={onCloseHandler}>
          Close
        </button>
      </Modal>
    </div>
  )
}
```

[npm-url]: https://www.npmjs.com/package/react-modal-simple-customizable
[npm-image]: https://img.shields.io/npm/v/react-modal-simple-customizable
[github-license]: https://img.shields.io/github/license/pcourant/react-modal-simple-customizable
[github-license-url]: https://github.com/pcourant/react-modal-simple-customizable/blob/master/LICENSE
[github-build]: https://github.com/pcourant/react-modal-simple-customizable/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/pcourant/react-modal-simple-customizable/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/react-modal-simple-customizable
