/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
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
    maleName = `masculino: ${malePrefix}${maleSuffix}`

    const allFemalePrefix = [...femaleNames.table_a, ...femaleNames.table_b]
    const femalePrefix = pickOne(allFemalePrefix)
    const femaleSuffix = pickOne(femaleNames.suffix)
    femaleName = `feminino: ${femalePrefix}${femaleSuffix}`

    familyName = match.params.family
    family = `família: ${pickOne(families[familyName])}`
  }

  const Name = styled.div`
    background: var(--global-primary-color-${familyName});
    color: var(--global-secundary-color-${familyName});
    font-family: "Helvetica Neue","Helvetica","Arial",sans-serif;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    line-height: 1.125;
    padding: 16px 0;
    margin: 10px 0;
    text-transform: capitalize;
  `

  return (
    <section>
      <Nav activeFamily={match.params.family} />
      <Name>{maleName}</Name>
      <Name>{femaleName}</Name>
      <Name>{family}</Name>
    </section>
  )
}

export default Page
