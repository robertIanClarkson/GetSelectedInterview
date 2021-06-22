import React from 'react';
import Onboarding from './Onboarding';

import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";

import {
  PageContainer,
  PageContentContainer,
  PageNavBar,
  Logo
} from "../shared/components/StyledComponents";



function App() {
  return (
    <Router>
      <PageContainer>
        <PageNavBar>
          <Logo src="/logo.png" />
        </PageNavBar>
        <PageContentContainer>
          <Switch>
            <Route exact path="/">
              <Redirect to="/onboarding" />
            </Route>
            <Route path="/onboarding">
              <Onboarding />
            </Route>
          </Switch>
        </PageContentContainer>
      </PageContainer>
    </Router>
  );
}

export default App;
