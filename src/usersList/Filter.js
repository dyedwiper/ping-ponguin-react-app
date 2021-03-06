import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import CheckboxGroup from './CheckboxGroup'

Filter.propTypes = {
  residenceFilterValue: PropTypes.string,
  onChangeResidenceFilterValue: PropTypes.func.isRequired,
  abilityFilterValues: PropTypes.array.isRequired,
  onChangeAbilityFilterValues: PropTypes.func.isRequired,
}

export default function Filter({
  residenceFilterValue = '',
  onChangeResidenceFilterValue,
  abilityFilterValues,
  onChangeAbilityFilterValues,
}) {
  useEffect(() => {
    document.querySelector('[name=residenceFilterInput]').focus()
  }, [])

  return (
    <FilterStyled>
      <HeadlineStyled>Filtern nach:</HeadlineStyled>
      <LabelStyled>
        Wohnort
        <InputStyled
          name="residenceFilterInput"
          value={residenceFilterValue}
          onChange={event =>
            onChangeResidenceFilterValue(event.currentTarget.value)
          }
        />
      </LabelStyled>
      <AbilityFilterStyled>
        <SubHeadlineStyled>Spielstärken</SubHeadlineStyled>
        <CheckboxGroup
          activeCheckboxes={abilityFilterValues}
          setActiveCheckboxes={onChangeAbilityFilterValues}
        />
      </AbilityFilterStyled>
    </FilterStyled>
  )
}

const FilterStyled = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: 20px;
  box-shadow: -7px 7px 6px 0 rgba(0, 0, 0, 0.5);
  border-bottom-left-radius: 20px;
  height: 230px;
  width: 325px;
  padding: 30px 20px;
  background-color: var(--skyBlue);
`

const HeadlineStyled = styled.h3`
  margin: 0;
`
const SubHeadlineStyled = styled.h4`
  margin: 0;
  font-weight: normal;
`

const LabelStyled = styled.label`
  display: grid;
  grid-gap: 10px;
`

const InputStyled = styled.input`
  width: 200px;
  height: 30px;

  :focus {
    border-color: var(--plantGreen);
  }
`

const AbilityFilterStyled = styled.div`
  display: grid;
  grid-gap: 10px;
`
