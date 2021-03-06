import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import UserAccount from './components/UserAccount'
import QuotesPage from './components/QuotesSubPage/QuotesPage';
import ValuesPage from './components/ValuesSubPage/ValuesPage';
import styled from 'styled-components'
import APIQuotesHomePage from './components/MediocreQuotes/APIQuotesHomePage';

const PageWrapper = styled.div`
  background-color: #7100ff17;
  border-radius: 10px;
`

class App extends Component {
  render() {
    //what is the props in paranthesis doing here?
    const WelcomePageWrapper = (props) =>(
      <Welcome {...props}/>
    )

    const HomePageWrapper = (props) =>(
      <HomePage {...props}/>
    )

    const APIQuotesWrapper = (props) =>(
      <APIQuotesHomePage {...props}/>
    )
    return (
      <Router>
        <PageWrapper>
          <Switch>
            <Route exact path="/" render={WelcomePageWrapper}/>
            <Route exact path="/user/:userId/" render={HomePageWrapper}/>
            <Route exact path="/user/:userId/settings" component={UserAccount}/>
            <Route exact path="/user/:userId/quotes" component={QuotesPage}/>
            <Route exact path="/user/:userId/values" component={ValuesPage}/>
            <Route exact path="/user/:userId/mediocre" render={APIQuotesWrapper}/>
          </Switch>
        </PageWrapper>
      </Router>
    );
  }
}

export default App;
