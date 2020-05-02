/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

function Nav (props) {
  const family = props.activeFamily

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

  return (
    <div className="buttons is-centered familias">
      {links.map((link) => (
        <Link
          key={link.url}
          className={family === link.url ? `button is-small ${family}` : 'button is-small'}
          to={link.url}
        >
          {link.name}
        </Link>
      ))}
    </div>
  )
}

export default Nav
