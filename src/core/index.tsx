import { h, render } from 'preact'
import Router from './router'

render(<Router />, document.querySelector('#root') as Element)
