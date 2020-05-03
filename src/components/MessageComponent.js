/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const MessageComponent = (props) => {
  const Message = styled.div`
    background: var(--global-primary-color-${props.familyName});
    color: var(--global-secundary-color-${props.familyName});
    font-family: 'Shadows Into Light', cursive;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    letter-spacing: 3px;
    line-height: 1.125;
    padding: 16px 0;
    margin: 10px 0;
  `

  return <Message>{props.message}</Message>
}

export default MessageComponent
