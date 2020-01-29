import React from 'react';
import lake from '../../assets/dark-lake.jpeg';
import cycleTrees from '../../assets/cycle-trees.jpeg'
import './Home.css'

export const Home = () => {

  return(
    <div>
      <img src={lake} className="img__lake" />
      <img src={cycleTrees} />
    </div>
    
  )
}