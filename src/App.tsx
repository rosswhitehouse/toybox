import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { StyledH2 } from './components/Styled'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <StyledH2>Hi There!</StyledH2>
      <p>I'm Ross, I'm a developer from Birmingham, UK.</p>
      <p>This is my toybox where I put stuff that I make. Demos and new tools I'm trying. That sort of thing.</p>
      <p><a href="https://github.com/rosswhitehouse/toybox">See the Code.</a></p>
      <p><a href="https://rosswhitehouse.dev">See my other stuff.</a></p>
    </div>
  )
}

export default App
