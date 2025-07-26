import React from 'react'
import QuoteMachine from './QuoteMachine'
import MarkdownPreviewer from './MarkDownPreviewer'
import DrumMachine from './DrumMachine'

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