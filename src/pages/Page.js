/* eslint-disable react/prop-types */
import React from 'react'
import pickOne from '../helpers/pickOne'

import maleNames from '../config/maleNames'

import Nav from '../components/Nav'

function Page ({ match }) {
  const allPrefix = [...maleNames.table_a, ...maleNames.table_b]
  const prefix = pickOne(allPrefix)
  const suffix = pickOne(maleNames.suffix)
  const familyName = match.params.family
  const family = pickOne(maleNames[familyName])

  const name = `${prefix}${suffix} ${family}`

  const familyClass = `hero ${familyName}`

  return (
    <section>
      <Nav activeFamily={match.params.family} />
      <section className={familyClass}>
        <div className="container">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-capitalized">{name}</h1>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Page
