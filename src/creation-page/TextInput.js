import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

export default function TextInput({ labelName, name, value, onChange }) {
  return (
    <LabelStyled>
      {labelName}
      <InputStyled
        name={name}
        value={value}
        onChange={event => onChange(event.currentTarget.value)}
        maxLength={20}
      ></InputStyled>
      {value.length === 20 && <AlertStyled>max. 20 Zeichen</AlertStyled>}
    </LabelStyled>
  )
}

const LabelStyled = styled.label`
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 10px;
  font-weight: bold;
`

const InputStyled = styled.input`
  width: 200px;
  border: none;

  :focus {
    outline: 2px solid;
    outline-color: #849237;
  }
`

const AlertStyled = styled.span`
  font-size: 14px;
  color: #c8232a;
`
