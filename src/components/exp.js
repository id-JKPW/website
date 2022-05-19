import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class ExpAch extends Component {
  render(){
    return(
      <div className="exp-body">
        <Grid className="exp-grid">
          <Cell col={6}>
            <div className="exp-text">
              <h2> Experience: </h2>
              <p className="p-indent"> - IT service desk analyst at ATO </p>
              <p className="p-indent"> - IT manager at Monash University Taekwondo Club </p>
              <p className="p-indent"> - Intern at Skyview Optical Company Limited (based in Hong Kong) </p>
            </div>
          </Cell>
          <Cell col={6}>
            <div className="exp-text">
              <h2> Projects: </h2>
              <p className="p-indent"> - Monash WIL project for The Clayton Hotel </p>
              <p className="p-indent"> - Team leader for Team 17 2020 Monash Industry Experience project </p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default ExpAch;
