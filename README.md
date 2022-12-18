# react-modal-simple

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

It is simple React modal dialog.

[**Live Demo**](https://pcourant.github.io/react-modal-simple-customizable/)

## Installation:

```bash
npm install react-modal-simple-customizable --save-dev
```

or

```bash
yarn add -D react-modal-simple-customizable
```

## Usage :

Add `MyCounter` to your component:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyCounter } from 'react-modal-simple-customizable'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <div>
            <h2>Default counter</h2>
            <MyCounter />
        </div>
        <hr />
        <div>
            <h2>Counter with predefined value</h2>
            <MyCounter value={5} />
        </div>
    </React.StrictMode>,
)

```

[npm-url]: https://www.npmjs.com/package/react-modal-simple-customizable
[npm-image]: https://img.shields.io/npm/v/react-modal-simple-customizable
[github-license]: https://img.shields.io/github/license/pcourant/react-modal-simple-customizable
[github-license-url]: https://github.com/pcourant/react-modal-simple-customizable/blob/master/LICENSE
[github-build]: https://github.com/pcourant/react-modal-simple-customizable/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/pcourant/react-modal-simple-customizable/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/react-modal-simple-customizable
