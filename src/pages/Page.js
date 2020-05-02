/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import pickOne from '../helpers/pickOne'
import maleNames from '../config/maleNames'
import Nav from '../components/Nav'

function Page ({ match }) {
  let name = 'Selecione uma familia acima'
  let familyName
  if (match.params.family) {
    const allPrefix = [...maleNames.table_a, ...maleNames.table_b]
    const prefix = pickOne(allPrefix)
    const suffix = pickOne(maleNames.suffix)
    familyName = match.params.family
    const family = pickOne(maleNames[familyName])
    name = `${prefix}${suffix} ${family}`
  }

  const Name = styled.div`
    background: var(--global-primary-color-${familyName});
    color: var(--global-secundary-color-${familyName});
    font-family: "Helvetica Neue","Helvetica","Arial",sans-serif;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    line-height: 1.125;
    padding: 3rem 1.5rem;
    text-transform: capitalize;
  `

  return (
    <section>
      <Nav activeFamily={match.params.family} />
      <Name>{name}</Name>
    </section>
  )
}

export default Page
