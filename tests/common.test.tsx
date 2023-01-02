import React from 'react'
import { render } from '@testing-library/react'

import { Modal } from '../src/'

let container: HTMLElement

beforeEach(() => {
  const root = document.createElement('div')
  root.setAttribute('id', 'root')
  container = document.body.appendChild(root)
})

describe('Common render', () => {
  it('renders without crashing', () => {
    const root = document.createElement('div')
    root.setAttribute('id', 'root')
    render(<Modal />, {
      container,
    })
  })
})
