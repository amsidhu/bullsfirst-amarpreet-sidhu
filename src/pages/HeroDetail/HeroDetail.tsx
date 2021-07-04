import React from 'react';
import './HeroDetail.css';

export const HeroDetail = () => {
  return (
    <div className="detail-container">
      <p className="text-default">Every account comes with:</p>
      <ul>
        <li className="text-default">0-second execution</li>
        <li className="text-default">Portfolio insurance</li>
        <li className="text-default">1 popsicle</li>
      </ul>
      <p className="text-default">We love to trade, and we hope you do too! </p>
      <p className="text-default">
        Now you can express that love with the latest trading platform from
        Bullsfirst. We guarantee a 0-second trade execution, and will give you a
        free popsicle if your trade doesn’t go through in this time period.
      </p>
      <p className="text-default-italic">
        On a side-note, we just bought a big freezer and 10,000 popsicles.
        Thankfully, we’ve hedged all popsicle expenses for the next two years!
        (Commodity experts say popsicles are on the rise).
      </p>
      <p className="text-sm-italic">
        This is a demo application. All data displayed is fictitious.
      </p>
    </div>
  );
};
