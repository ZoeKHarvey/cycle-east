import React from 'react';
import lake from '../../assets/dark-lake.jpeg';
import cycleTrees from '../../assets/cycle-trees.jpeg'
import './Home.css'

export const Home = () => {

  return(
    <div>
      <img src={lake} className="img__lake" />
      <img src={cycleTrees} className="img__cycle"/>
      <div className="div__home--text">
        <h4 className="h4__home--title">A new kind of adventure</h4>
        <p className="p__home--paragraph">Where the adrenaline of independence meets the comfort of experience</p>
      <button className="button__explore">Learn What You Can Do</button>
      </div>
    </div>
    
  )
}