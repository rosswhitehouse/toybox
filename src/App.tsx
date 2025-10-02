import './App.css'
import { StyledH2, StyledLink } from './components/Styled'

function App() {

  return (
    <div>
      <StyledH2>Hi There!</StyledH2>
      <p>I'm Ross, I'm a developer from Birmingham, UK.</p>
      <p>This is my toybox where I put stuff that I make. Demos and new tools I'm trying. That sort of thing.</p>
      <p><StyledLink href="https://github.com/rosswhitehouse/toybox">See the Code.</StyledLink></p>
      <p><StyledLink href="https://rosswhitehouse.dev">See my other stuff.</StyledLink></p>
    </div>
  )
}

export default App
