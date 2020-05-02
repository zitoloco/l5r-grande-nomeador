import React from 'react'

import Nav from '../components/Nav'

function EmptyPage() {
  return (
    <section>
      <Nav />
      <section className="hero">
        <div className="container">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Selecione uma familia acima
              </h1>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default EmptyPage
