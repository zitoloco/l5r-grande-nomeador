/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Nav (props) {
  const familyName = props.activeFamily
  const links = [
    { name: 'caranguejo', url: 'caranguejo' },
    { name: 'dragão', url: 'dragao' },
    { name: 'escorpião', url: 'escorpiao' },
    { name: 'fênix', url: 'fenix' },
    { name: 'garça', url: 'garca' },
    { name: 'leão', url: 'leao' },
    { name: 'louva-a-deus', url: 'louva-a-deus' },
    { name: 'unicórnio', url: 'unicornio' }
  ]

  const Container = styled.div`
    align-items: center;
    margin-bottom: 1rem;
    display: flex;
    height: 120px;
    justify-content: space-between;
    margin: 0 auto;
    width: 700px;
  `

  const CustomLink = styled(Link)`
    align-items: center;
    border: 1px solid grey;
    border-radius: 2px;
    color: grey;
    font-family: "Helvetica Neue","Helvetica","Arial",sans-serif;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 10px 14px;
    text-decoration: none;
    &.${familyName} {
      background-color: var(--global-primary-color-${familyName});
      color: var(--global-secundary-color-${familyName});
    }
  `

  return (
    <Container>
      {links.map((link) => (
        <CustomLink key={link.url} className={link.url === familyName ? familyName : ''} to={link.url}>
          {link.name}
        </CustomLink>
      ))}
    </Container>
  )
}

export default Nav
