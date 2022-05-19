import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Textfield, Drawer, Navigation, Content} from 'react-mdl';
import Main from './components/main';
import {NavLink} from 'react-router-dom';

class App extends Component{
  render() {
    return (
      <div>
        <Layout fixedHeader>
            <Header className="header-color" title="Jimmy's Website">
              <Navigation>
                  <NavLink activeClassName="active-link" exact to="/">INTRO</NavLink>
                  <NavLink activeClassName="active-link" to="/aboutme">ABOUT ME</NavLink>
                  <NavLink activeClassName="active-link" to="/exp">EXPERIENCE</NavLink>
              </Navigation>
            </Header>

            <Main/>

            <Content />
        </Layout>
      </div>
    );
  }
}


export default App;
