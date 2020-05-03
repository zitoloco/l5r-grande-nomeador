/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const NameComponet = (props) => {
  const Name = styled.div`
    background: var(--global-primary-color-${props.family});
    color: var(--global-secundary-color-${props.family});
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

  const icon = `fa fa-${props.icon}`
  return (
    <Name>
      <i className={icon}></i> {props.name} {props.familyName}
    </Name>
  )
}

export default NameComponet
