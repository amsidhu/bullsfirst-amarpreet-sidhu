//import React from 'react';
import React, { Fragment } from 'react';
import { Loading } from '../../components';
import { Hero, HeroDetail } from '../../pages';
import { StringUtils } from '../../utils';
import './Home.css';

export const Home = () => {
  return (
    <Fragment>
      <main className="home-container">
        <Hero />
        <HeroDetail />
      </main>
    </Fragment>
  );
};
