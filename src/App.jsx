import React from 'react'
import QuoteMachine from './QuoteMachine'
import DrumMachine from './DrumMachine'
import MarkdownPreviewer from './MarkdownPreviewer'
import Calculator from './Calculator'

const App = () => {
  return (
    <div>
      <QuoteMachine/>
      <MarkdownPreviewer/>
      <DrumMachine/>
      <Calculator/>
    </div>
  )
}

export default App