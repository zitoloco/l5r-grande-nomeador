import React from 'react';
import pickOne from '../helpers/pickOne';

import maleNames from '../config/maleNames';

import Nav from '../components/Nav'

function Page({ match }) {

  const allPrefix = [...maleNames['table_a'], ...maleNames['table_b']];
  const prefix = pickOne(allPrefix);
  const suffix = pickOne(maleNames['suffix']);
  const family = pickOne(maleNames[match.params.family]);

  const name =`${prefix}${suffix} ${family}`;
    
  return (
    <section>
      <Nav activeFamily={match.params.family} />
      <section className="hero is-primary">
        <div className="container">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-capitalized">{name}</h1>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Page;
