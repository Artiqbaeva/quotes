import React from 'react'
import QuoteMachine from './QuoteMachine'
import DrumMachine from './DrumMachine'
import MarkdownPreviewer from './MarkdownPreviewer'

const App = () => {
  return (
    <div>
      <QuoteMachine/>
      <MarkdownPreviewer/>
      <DrumMachine/>
    </div>
  )
}

export default App