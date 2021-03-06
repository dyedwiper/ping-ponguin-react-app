import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components/macro'
import Alert from '../common/Alert'
import Page from '../common/Page'
import {
  BackButtonStyled,
  ButtonStyled,
  Cushion,
  FormStyled,
  GridContainer,
} from '../common/styledElements'
import TextInput from '../common/TextInput'
import { signUp } from '../utils/services'
import RadioButtonGroup from './RadioButtonGroup'

SignUpPage.propTypes = {
  setJustSignedUp: PropTypes.func.isRequired,
}

export default function SignUpPage({ setJustSignedUp }) {
  const [missingInputs, setMissingInputs] = useState([])
  const [alert, setAlert] = useState('')
  let history = useHistory()

  useEffect(() => {
    document.querySelector('input').focus()
  }, [])

  return (
    <Page title="Profil erstellen" showNavigation={false}>
      <GridContainer>
        <FormStyled onSubmit={handleSignUp}>
          <TextInput
            labelName="Name"
            name="name"
            maxLength={20}
            missingInputs={missingInputs}
          />
          <TextInput
            labelName="Wohnort"
            name="residence"
            maxLength={50}
            missingInputs={missingInputs}
          />
          <AbilityContainerStyled>
            Spielstärke
            <StyledParagraph>
              Schätze deine Spielstärke auf einer Skala von 1 (Blinge) bis 5
              (Profi) ein.
            </StyledParagraph>
            <RadioButtonGroup
              name="abilityLeft"
              missingInputs={missingInputs}
            ></RadioButtonGroup>
            <RadioButtonGroup
              name="abilityRight"
              missingInputs={missingInputs}
            ></RadioButtonGroup>
          </AbilityContainerStyled>
          <TextInput
            labelName="Bild per URL einfügen (optional)"
            name="imageURL"
            placeholder="z.B. https://images.com/yourimage.jpg"
          />
          <TextInput
            labelName="E-Mail"
            name="email"
            missingInputs={missingInputs}
          />
          <TextInput
            labelName="Passwort"
            name="password"
            type="password"
            missingInputs={missingInputs}
          />
          {alert && <Alert>{alert}</Alert>}
          <ButtonStyled>Profil erstellen</ButtonStyled>
        </FormStyled>
        <BackButtonStyled
          onClick={() => {
            history.push('/')
          }}
        >
          zurück
        </BackButtonStyled>
        <Cushion />
      </GridContainer>
    </Page>
  )

  function handleSignUp(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const newUser = Object.fromEntries(formData)
    if (newUser.imageURL === '') {
      newUser.imageURL =
        'https://farm9.staticflickr.com/8494/8334907268_ffacd64d3f.jpg'
    }
    signUp(newUser)
      .then(res => {
        if (!res.success) {
          throw new Error(res.message)
        }
        form.reset()
        setJustSignedUp(true)
        history.push('/')
      })
      .catch(err => {
        if (err.message.startsWith('Zu dieser E-Mail-Adresse')) {
          setAlert(err.message)
          setMissingInputs([])
        } else if (err.message.startsWith('User validation failed')) {
          setMissingInputs(Object.keys(err.errors))
          setAlert('')
        } else {
          console.error(err)
        }
      })
  }
}

const AbilityContainerStyled = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 20px;
  font-weight: bold;
`

const StyledParagraph = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: normal;
`
