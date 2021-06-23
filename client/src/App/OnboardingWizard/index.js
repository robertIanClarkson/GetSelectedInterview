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

  // used to resolve URL path
  let { path } = useRouteMatch();

  /**
   * checks if n number of subjects w/ courses set in user state.
   * @param {int} n - number of subjects to check if set
   * @returns {Boolean}
   */
  const isSubjectsSet = (n) => {
    if (user.subjects.length < n) return false;
    let completedSubjects = user.subjects.filter((subject) => (subject.courses.length > 0));
    return completedSubjects.length >= n;
  };

  return (
    <Router>
      <Switch>
        <Route exact path={path}>
          <Redirect to={`${path}/aboutyou`} />
        </Route>
        <Route path={`${path}/aboutyou`}>
          <AboutYouComponent user={user} />
        </Route>
        <Route path={`${path}/subjects`}>
          <SubjectsComponent 
              user={user} 
              setUser={setUser} 
              isSubjectsSet={isSubjectsSet} />
        </Route>
        <Route path={`${path}/subjectdetails`}>
          {isSubjectsSet(2)
            ? <SubjectDetailsComponent user={user} />
            : <Redirect to={`${path}/subjects`} />}
        </Route>
      </Switch>
    </Router>
  );
};

export default OnboardingWizard;
