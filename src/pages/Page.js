/* eslint-disable react/prop-types */
import React from 'react'
import pickOne from '../helpers/pickOne'
import families from '../config/families'
import maleNames from '../config/maleNames'
import femaleNames from '../config/femaleNames'

import NavComponent from '../components/NavComponent'
import NamesComponent from '../components/NamesComponent'
import MessageComponent from '../components/MessageComponent'

function Page ({ match }) {
  const haveFamily = !!match.params.family

  return (
    <section>
      <NavComponent activeFamily={match.params.family} />
      {haveFamily ? (
        <NamesComponent
          maleName={pickOne([...maleNames.table_a, ...maleNames.table_b]) + pickOne(maleNames.suffix)}
          femaleName={pickOne([...femaleNames.table_a, ...femaleNames.table_b]) + pickOne(femaleNames.suffix)}
          familyName={pickOne(families[match.params.family])}
          family={match.params.family}
        />
      ) : (
        <MessageComponent message='Selecione uma familia acima' />
      )}
    </section>
  )
}

export default Page
