import React from 'react'
import ReactDOM from 'react-dom'
import { JournalApp } from './JournalApp'
import './styles/styles.scss'

const divRoot = document.querySelector('#root')

ReactDOM.render(
    <JournalApp />,
    divRoot
)