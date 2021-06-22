import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import AboutYou from './AboutYou';
import Subjects from './Subjects';
import SubjectDetails from './SubjectDetails';

const Onboarding = () => {
  const [user, setUser] = useState({
    firstName: "Robert",
    lastName: "Clarkson",
    subject_0: null,
    subject_1: null,
    courses_0: [],
    courses_1: []
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
          <AboutYou user={user} setUser={setUser} />
        </Route>
        <Route path={`${path}/subjects`}>
          <Subjects user={user} setUser={setUser} />
        </Route>
        <Route path={`${path}/subjectdetails`}>
          <SubjectDetails user={user} setUser={setUser} />
        </Route>
      </Switch>
    </Router>
  ); 
}

export default Onboarding;
