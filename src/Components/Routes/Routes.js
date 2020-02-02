import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Routes.css';

export const Routes = () => {

    return(
      <div className="div__routes">
        <h1>Routes</h1>
        <p className="p__routes--txt">Rates are personalized based on route, time of year and experience level. 
          We do this because these factors may effect the amount of guidance needed.
          Inquire here! </p>
      </div>
    )
  
}