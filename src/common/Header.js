import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ppLogo from '../assets/pp-logo.png'
import coffeeFilterIcon from '../assets/coffee-filter-icon.svg'

Header.propTypes = {
  title: PropTypes.string,
  home: PropTypes.bool,
  chatPartnerImage: PropTypes.string,
  showFilterSymbol: PropTypes.bool,
  isFilterVisible: PropTypes.bool,
  onFilterClick: PropTypes.func,
}

export default function Header({
  title,
  home = false,
  chatPartnerImage = '',
  showFilterSymbol = false,
  isFilterVisible = false,
  onFilterClick,
}) {
  return (
    <HeaderStyled>
      <LogoStyled src={ppLogo} />
      {home ? <H1Styled>{title}</H1Styled> : <H2Styled>{title}</H2Styled>}
      {chatPartnerImage && <ChatPartnerImageStyled src={chatPartnerImage} />}
      {showFilterSymbol && (
        <IconStyled
          isFilterVisible={isFilterVisible}
          src={coffeeFilterIcon}
          onClick={handleClick}
        ></IconStyled>
      )}
    </HeaderStyled>
  )

  function handleClick() {
    onFilterClick()
  }
}

const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 48px auto 48px;
  place-items: center;
  grid-gap: 5px;
  border-bottom: 2px solid var(--skyBlue);
  padding: 0 5px;
  background-color: var(--iceBlue);
`

const H1Styled = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-family: 'MetroBlack LT Two', Helvetica, sans-serif;
  color: var(--skyBlue);
`

const H2Styled = styled.h2`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 90%;
  margin: 0;
  font-size: 2rem;
  font-family: 'MetroBlack LT Two', Helvetica, sans-serif;
  color: var(--skyBlue);
`

const LogoStyled = styled.img`
  height: 32px;
`

const IconStyled = styled.img`
  height: 40px;
  outline: ${({ isFilterVisible }) =>
    isFilterVisible && '10px var(--skyBlue) solid'};
  background-color: ${({ isFilterVisible }) =>
    isFilterVisible && 'var(--skyBlue)'};
`

const ChatPartnerImageStyled = styled.img`
  object-fit: cover;
  border-radius: 75px 75px 55.5px 55.5px;
  height: 36px;
  width: 36px;
`
