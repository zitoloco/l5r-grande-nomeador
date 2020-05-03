/* eslint-disable react/prop-types */
import React from 'react'
import NameComponent from './NameComponent'

const NamesComponents = (props) => {
  console.log(props)
  return (
    <>
      <NameComponent
        icon="male"
        name={props.maleName}
        familyName={props.familyName}
        family={props.family}
      />
      <NameComponent
        icon="female"
        name={props.femaleName}
        familyName={props.familyName}
        family={props.family}
      />
    </>
  )
}

export default NamesComponents
