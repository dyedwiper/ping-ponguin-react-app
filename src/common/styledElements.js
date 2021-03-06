import styled from 'styled-components/macro'

export const FormStyled = styled.form`
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: 40px;
`

export const LabelStyled = styled.label`
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 5px;
  font-weight: bold;
`

export const InputStyled = styled.input`
  border-style: solid;
  border-color: var(--iceBlue);
  width: 100%;
  height: 30px;
  padding: 0 5px;

  :focus {
    border-color: var(--plantGreen);
  }
`

export const ButtonStyled = styled.button`
  justify-self: center;
  border: none;
  width: 150px;
  height: 50px;
  background-color: var(--iceBlue);
`

//Das folgende Element ist zum Erzeugen eines Abstands zur Unterkante,
//wenn man ganz nach unten scrollt.
//Gibt es eine bessere Lösung?
export const Cushion = styled.div`
  height: 40px;
`

export const GridContainer = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: 20px;
  justify-items: center;
`

export const LoadingMessageStyled = styled.div``

export const BackButtonStyled = styled.button`
  border: none;
  height: 30px;
  width: 100px;
  background: none;
  text-decoration: underline;
  color: var(--iceBlue);
`
