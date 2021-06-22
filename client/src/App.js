import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory
} from "react-router-dom";
import './App.css';
import {
  PageContainer,
  PageContentContainer,
  PageTitle,
  PanelContainer,
  PanelColumnsContainer,
  PanelMainColumn,
  PanelSideColumn,
  PanelSection,
  PanelSectionTitle,
  StyledTextInput,
  PanelSectionHeader,
  PageNavBar,
  Logo,
  PanelProgress
} from "./StyledComponents";

import Select from 'react-select';
import subjectData from './SubjectData';


const Onboard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [user, setUser] = useState({
    firstName: "Robert",
    lastName: "Clarkson",
    subject_0: null,
    subject_1: null,
    courses_0: [],
    courses_1: []
  });

  let { path, url } = useRouteMatch();
  return (
    <Router>
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
      <button onClick={() => console.log(user)}>state</button>
    </Router>
  );
  
}


const AboutYou = ({user, setUser}) => {
  return (
    <React.Fragment>
      <PanelContainer>
        <PanelColumnsContainer>
          <PanelProgress primary>
            About You
          </PanelProgress>  
          <PanelProgress>
            Subjects
          </PanelProgress>  
          <PanelProgress>
            Subject Details
          </PanelProgress>  
        </PanelColumnsContainer>
        <PanelSection>
          <PanelSectionTitle>
            About You
          </PanelSectionTitle>
          <PanelMainColumn>
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
          </PanelMainColumn>
        </PanelSection>
      </PanelContainer>
      <Link to="/onboard/subjects" >next</Link>
    </React.Fragment>
    
  )
}


const Subjects = ({user, setUser}) => {    

  const setSubject = (index, subject) => {
    /* Need to clear courses if changing from 1 subject to another */
    if (index === 0) {
      setUser({
        ...user,
        subject_0: subject,
        courses_0: []
      }) 
    } else if (index === 1) {
      setUser({
        ...user,
        subject_1: subject,
        courses_1: []
      })
    }
  }

  const setCourses = (index, courses) => {
    if (index === 0) {
      setUser({
        ...user,
        courses_0: courses
      }) 
    } else if (index === 1) {
      setUser({
        ...user,
        courses_1: courses
      })
    }
  }
  

  /* Subject 0 Options */
  let subjectOptions_0 = [];
  let courseOptions_0 = [];
  subjectOptions_0 = subjectData.map((ele) => {
        return {
          label: ele.name,
          value: ele.name.toLowerCase()
        }
      })
  
  if (user.subject_0 !== null) {
    courseOptions_0 = subjectData.find(ele => ele.name === user.subject_0.label).courses.map(ele => ({label: ele, value: ele.toLowerCase()}))
  }
  
  /* Subject 1 Options */
  let subjectOptions_1 = [];
  let courseOptions_1 = [];
  
  if (user.subject_0 !== null) {
    for (const subject of subjectData) {
      if (subject.name !== user.subject_0.label) {
        subjectOptions_1.push({
          label: subject.name,
          value: subject.name.toLowerCase()
        })
      }
    }
  }
  
  if (user.subject_1 !== null) {
    courseOptions_1 = subjectData.find(ele => ele.name === user.subject_1.label).courses.map(ele => ({label: ele, value: ele.toLowerCase()}))
  }

  return (
    <React.Fragment>
      <PanelContainer>
        <PanelColumnsContainer>
          <PanelProgress>
            About You
          </PanelProgress>  
          <PanelProgress primary>
            Subjects
          </PanelProgress>  
          <PanelProgress>
            Subject Details
          </PanelProgress>  
        </PanelColumnsContainer>
        <PanelSection>
          <PanelSectionTitle>
            Subjects
          </PanelSectionTitle>
          <PanelMainColumn>
            Select 2 subjects you're most qualified to teach. You can edit these or add more subjects later.
            <Select 
                defaultValue={user.subject_0}
                options={subjectOptions_0} 
                onChange={(subject) => setSubject(0, subject)} />
            <Select 
                value={user.courses_0}
                options={courseOptions_0} 
                onChange={(courses) => setCourses(0, courses)}
                isMulti/>
            {user.subject_0 !== null && <Select 
                defaultValue={user.subject_1}
                options={subjectOptions_1} 
                onChange={(subject) => setSubject(1, subject)} />}
            {user.subject_0 !== null && <Select 
                value={user.courses_1}
                options={courseOptions_1} 
                onChange={(courses) => setCourses(1, courses)}
                isMulti/>}
                
          </PanelMainColumn>
        </PanelSection>
      </PanelContainer>
      <Link to="/onboard/aboutyou">prev</Link>
      <Link to="/onboard/subjectdetails">next</Link>
    </React.Fragment>
  )
}


const SubjectDetails = ({}) => {
  return (
    <React.Fragment>
      <PanelContainer>
        <PanelColumnsContainer>
          <PanelProgress>
            About You
          </PanelProgress>  
          <PanelProgress>
            Subjects
          </PanelProgress>  
          <PanelProgress primary>
            Subject Details
          </PanelProgress>  
        </PanelColumnsContainer>
        <PanelSection>
          <PanelSectionTitle>
            Subject Details
          </PanelSectionTitle>
          <PanelMainColumn>
            
            This is some sample text
          </PanelMainColumn>
        </PanelSection>
      </PanelContainer>
      <Link to="/onboard/subjects">prev</Link>
    </React.Fragment>
  );
}

function App() {
  return (
    <Router>
      <PageContainer>
        <PageNavBar>
          <Logo src="/logo.svg" />
        </PageNavBar>
        <PageContentContainer>
          <Switch>
            <Route exact path="/">
              <Redirect to="/onboard" />
            </Route>
            <Route path="/onboard">
              <Onboard />
            </Route>
          </Switch>
        </PageContentContainer>
      </PageContainer>
    </Router>
  );
}

export default App;
