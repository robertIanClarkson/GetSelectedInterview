import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import AboutYouComponent from './AboutYouComponent';
import SubjectsComponent from './SubjectsComponent';
import SubjectDetailsComponent from './SubjectDetailsComponent';

const OnboardingWizard = () => {
  
  const [user, setUser] = useState({
    firstName: "Robert",
    lastName: "Clarkson",
    zipCode: "94132",
    subjects: []
  });

  let { path } = useRouteMatch();

  return (
    <Router>
      {/* <button onClick={() => console.log(user)}>state</button> */}
      <Switch>
        <Route exact path={path}>
          <Redirect to={`${path}/aboutyou`} />
        </Route>
        <Route path={`${path}/aboutyou`}>
          <AboutYouComponent user={user} />
        </Route>
        <Route path={`${path}/subjects`}>
          <SubjectsComponent user={user} setUser={setUser} n={2} />
        </Route>
        <Route path={`${path}/subjectdetails`}>
          <SubjectDetailsComponent user={user} />
        </Route>
      </Switch>
    </Router>
  ); 
}

export default OnboardingWizard;
