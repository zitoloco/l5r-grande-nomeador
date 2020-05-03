/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import device from '../config/device'

function NavComponent (props) {
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

    justify-content: space-between;

    @media ${device.mobileM} {
      align-items: center;
      flex-direction: column;
      flex-wrap: wrap;
      height: 360px;
      margin: 20px;
    }
    @media ${device.tablet} {
      height: 90px;
    }
    @media ${device.laptop} {
      align-items: center;
      flex-direction: row;
      margin: 0 auto;
      width: 1000px;
    }
    
    display: flex;
    margin-bottom: 1rem;
    margin: 0 auto;
  `

  const CustomLink = styled(Link)`
    // align-content: center;
    border: 1px solid grey;
    border-radius: 2px;
    color: grey;
    font-family: "Helvetica Neue","Helvetica","Arial",sans-serif;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    flex-wrap: wrap;
    padding: 10px 14px;
    text-decoration: none;
    
    &.${familyName} {
      background-color: var(--global-primary-color-${familyName});
      color: var(--global-secundary-color-${familyName});
    }
    @media ${device.mobileS} {
      width: 91%;
    }
    @media ${device.mobileL} {
      width: 93%;
    }
    @media ${device.tablet} {
      width: 19%;
    }
    @media ${device.laptop} {
      width: 86px;
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

export default NavComponent
