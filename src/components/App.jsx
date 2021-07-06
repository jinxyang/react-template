import React from 'react'
import styled from 'styled-components'

import Logo from 'assets/logo.jpg'

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`
const StyledLogo = styled.img`
  display: block;
  width: 400px;
`

const App = () => {
  return (
    <StyledApp>
      <StyledLogo src={Logo} />
      <h1>
        <a
          href="https://github.com/jinxyang/react-cli"
          target="_blank"
          rel="noreferrer"
        >
          Document
        </a>
      </h1>
    </StyledApp>
  )
}

export default App
