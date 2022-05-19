import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class Landing extends Component {
  render(){
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src = "/avatar_square.png" className = "home-img01"/>
            <div className="home-title-text">
              <h1>Jimmy Wong</h1>
              <h2>Commerce and IT Graduate</h2>
              <p>HTML | CSS | SQL | REACT | PYTHON</p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
