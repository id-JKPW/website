import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class AboutMe extends Component {

  render(){
    return(
      <div className="aboutme-body">
        <Grid className="aboutme-grid">
          <Cell col={6}>
            <div className="aboutme-text">
              <h2> About Me </h2>
              <p> Hello, welcome to my website. As you may have noticed already, my name is Jimmy. </p>
              <p> My interests is in computer security, but I am also interest in web development. Currently looking for some casual or part time job the can I can experience both aspects of IT work.</p>
              <p> I am currently in my final year for my Commerce and IT Bachelor's degree at Monash. </p>
              <p> My major for commerce is finance and major for IT is computer networks and security. </p>
            </div>
          </Cell>
          <Cell col={6}>
            <div className="aboutme-text">
              <h2> Social Media </h2>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default AboutMe;
