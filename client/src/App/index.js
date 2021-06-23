import React from 'react';
import OnboardingWizard from './OnboardingWizard';

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

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  typography: {
    fontWeight: 400
  },
  palette: {
    primary: {
      main: "#F68002",
      dark: '#fd9c35',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: "#FFFFFF",
      dark: '#e6e6e6',
      contrastText: '#000000'
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>    
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
                <OnboardingWizard />
              </Route>
            </Switch>
          </PageContentContainer>
        </PageContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
