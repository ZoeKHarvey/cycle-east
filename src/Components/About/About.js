import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './About.css'

export const About = () => {

    return(
      <div className="div__about">
        <h1>About</h1>
        <p>A guided yet independent cycling tour specifically focused in the New England area.</p>
        <p className="p__about--main">A broken down truck is what led Judy Harvey to her passion for cycling.<br/> 
        Biking to work every day quickly transformed into making treks across the east coast - 
        Vermont to Montreal being one of her personal favorites. <br/> Through common missteps in her first couple 
        trips alone, she quickly adapted to solving problems on the road and learning how to better prepared
        for the next trip. <br/>Her extensive experience with cross-country cycling along with her fresh memory
        of what it was like to not have that safety net of preparation brought her here.<br/>This is not a regular bike
        tour, as she now strives to simply show you the ropes and prepare you for your first solo run.<br/> The mix
        of authentic outdoor grit with the stability of a seasoned guide is what makes this experience unique.</p>
        <Link to='/contact'>
          <button className="button__about--questions">Questions?</button>
        </Link>
      </div>
    )
  
}