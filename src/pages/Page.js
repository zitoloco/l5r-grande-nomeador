/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMale, faFemale } from '@fortawesome/free-solid-svg-icons'
import pickOne from '../helpers/pickOne'
import families from '../config/families'
import maleNames from '../config/maleNames'
import femaleNames from '../config/femaleNames'
import Nav from '../components/Nav'

function Page ({ match }) {
  let family
  let maleName = 'Selecione uma familia acima'
  let femaleName
  let familyName
  if (match.params.family) {
    const allMalePrefix = [...maleNames.table_a, ...maleNames.table_b]
    const malePrefix = pickOne(allMalePrefix)
    const maleSuffix = pickOne(maleNames.suffix)
    maleName = malePrefix + maleSuffix

    const allFemalePrefix = [...femaleNames.table_a, ...femaleNames.table_b]
    const femalePrefix = pickOne(allFemalePrefix)
    const femaleSuffix = pickOne(femaleNames.suffix)
    femaleName = femalePrefix + femaleSuffix

    familyName = match.params.family
    family = `${pickOne(families[familyName])}`
  }

  const Name = styled.div`
    background: var(--global-primary-color-${familyName});
    color: var(--global-secundary-color-${familyName});
    font-family: 'Shadows Into Light', cursive;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    letter-spacing: 3px;
    line-height: 1.125;
    padding: 16px 0;
    margin: 10px 0;
    text-transform: capitalize;
  `

  return (
    <section>
      <Nav activeFamily={match.params.family} />
      <Name><FontAwesomeIcon icon={faMale} /> {maleName} {family}</Name>
      <Name><FontAwesomeIcon icon={faFemale} /> {femaleName} {family}</Name>
    </section>
  )
}

export default Page
