import React, { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../assets/themes/theme'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Contact from '../components/organisms/Contact/Contact'
import Footer from '../components/molecules/Footer/Footer'
import Header from '../components/molecules/Header/Header'
import Item from '../components/organisms/Item/Item'
import Items from '../components/organisms/Items/Items'
import PrivacyPolicy from '../components/organisms/PrivacyPolicy/PrivacyPolicy'
import { GlobalStyle } from '../assets/themes/globalStyles'

const StyledWrapper = styled.div`
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  min-height: calc(100vh - 500px);
`

const Root = () => {
  const [state, setState] = useState('1')
  // potential issue about initial state when user will refresh browser
  const pullData = (data) => {
    setState(data)
  }
  // pullData function is downloading data from another component with using `func={pullData}`

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <StyledWrapper>
          <Routes>
            <Route exact path="/" element={<Items func={pullData} />} />
            <Route exact path="/beer" element={<Item id={state} />} />
            <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </StyledWrapper>
        <Footer />
      </ThemeProvider>
    </Router>
  )
}

export default Root
