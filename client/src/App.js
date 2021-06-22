import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  useRouteMatch,
  useHistory
} from "react-router-dom";
import './App.css';
import {
  PageContainer,
  PageContentContainer,
  PanelContainer,
  PanelColumnsContainer,
  PanelSection,
  PanelSectionTitle,
  PanelSectionHeader,
  PageNavBar,
  Logo,
  PanelProgress,
  PanelSectionDescription,
  PanelSectionBody,
  Row,
  Col,
  PanelNavigation
} from "./StyledComponents";

import Select from 'react-select';
import subjectData from './SubjectData';
import { Button } from '@material-ui/core';


const Onboard = () => {
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


const AboutYou = ({user, setUser}) => {
  const { push } = useHistory();
  return (
    <React.Fragment>
      <PanelContainer>
        <PanelColumnsContainer>
          <PanelProgress left primary>1 About You</PanelProgress>  
          <PanelProgress center>2 Subjects</PanelProgress>  
          <PanelProgress right>3 Subject Details</PanelProgress>  
        </PanelColumnsContainer>
        <PanelSection>
          <PanelSectionTitle>About You</PanelSectionTitle>
          <PanelSectionDescription>
            Here is some hardcoded sample data. It allows you to travel to part (2)Subjects
          </PanelSectionDescription>
          <PanelSectionBody>
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
          </PanelSectionBody>
        </PanelSection>
      </PanelContainer>
      <PanelNavigation>
        <Button
          style={{
            color: "#000000",
            backgroundColor: "#FFFFFF",
            fontWeight: 700,
            textTransform: "none"
          }}
          variant="contained" 
          color="secondary" 
          onClick={() => push("/onboarding/aboutyou")} >Back</Button>
        <Button
          style={{
            color: "#FFFFFF",
            backgroundColor: "#F68002",
            fontWeight: 700,
            textTransform: "none"
          }}
          variant="contained" 
          onClick={() => push("/onboarding/subjects")} >Continue</Button>
      </PanelNavigation>
    </React.Fragment>
    
  )
}


const Subjects = ({user, setUser}) => {    

  const setSubject = (index, subject) => {
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
  if (user.subject_1 !== null) {
    for (const subject of subjectData) {
      if (subject.name !== user.subject_1.label) {
        subjectOptions_0.push({
          label: subject.name,
          value: subject.name.toLowerCase()
        })
      }
    }
  } else {
    subjectOptions_0 = subjectData.map((ele) => {
      return {
        label: ele.name,
        value: ele.name.toLowerCase()
      }
    })
  }
  
  
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

  const { push } = useHistory();

  return (
    <React.Fragment>
      <PanelContainer>
        <PanelColumnsContainer>
          <PanelProgress left >1 About You</PanelProgress>  
          <PanelProgress center primary>2 Subjects</PanelProgress>  
          <PanelProgress right>3 Subject Details</PanelProgress>  
        </PanelColumnsContainer>
        <PanelSection>
          <PanelSectionTitle>Subjects</PanelSectionTitle>
          <PanelSectionDescription>
            Select 2 subjects you're most qualified to teach. You can edit these or add more subjects later.
          </PanelSectionDescription>
          <PanelSectionBody>
            <Row> 
              <Col width={"30%"}>
                <PanelSectionHeader>Subject</PanelSectionHeader>
                <Select
                  defaultValue={user.subject_0}
                  options={subjectOptions_0} 
                  onChange={(subject) => setSubject(0, subject)} />
              </Col>
              <Col width={"70%"}>
                <PanelSectionHeader>Courses</PanelSectionHeader>
                <Select 
                    value={user.courses_0}
                    options={courseOptions_0} 
                    onChange={(courses) => setCourses(0, courses)}
                    isMulti/>
              </Col>
            </Row>
            <Row>
              <Col width={"30%"}>
                <PanelSectionHeader>Subject</PanelSectionHeader>
                {user.subject_0 !== null && <Select 
                  defaultValue={user.subject_1}
                  options={subjectOptions_1} 
                  onChange={(subject) => setSubject(1, subject)} />}
              </Col>
              <Col width={"70%"}>
                <PanelSectionHeader>Courses</PanelSectionHeader>
                {user.subject_0 !== null && <Select 
                  value={user.courses_1}
                  options={courseOptions_1} 
                  onChange={(courses) => setCourses(1, courses)}
                  isMulti/>}
              </Col>
            </Row>
          </PanelSectionBody>
        </PanelSection>
      </PanelContainer>
      <PanelNavigation>
        <Button
            style={{
              color: "#000000",
              backgroundColor: "#FFFFFF",
              fontWeight: 700,
              textTransform: "none"
            }}
            variant="contained" 
            color="secondary" 
            onClick={() => push("/onboarding/aboutyou")} >Back</Button>
        <Button
            style={{
              color: "#FFFFFF",
              backgroundColor: "#F68002",
              fontWeight: 700,
              textTransform: "none"
            }}
            variant="contained" 
            color="primary" 
            onClick={() => push("/onboarding/subjectdetails")} >Continue</Button>
      </PanelNavigation>
    </React.Fragment>
  )
}


const SubjectDetails = ({user, setUser}) => {
  const { push } = useHistory();
  return (
    <React.Fragment>
      <PanelContainer>
        <PanelColumnsContainer>
          <PanelProgress left>1 About You</PanelProgress>  
          <PanelProgress center>2 Subjects</PanelProgress>  
          <PanelProgress right primary>3 Subject Details</PanelProgress>  
        </PanelColumnsContainer>
        <PanelSection>
          <PanelSectionTitle>Subject Details</PanelSectionTitle>
          <PanelSectionDescription>
            You successfully made it to the final section!
          </PanelSectionDescription>
          <PanelSectionBody>
            From here, I would replace the "Continue" button, with a "Submit" button.
            On submit, we would POST our data to the server to collect into the database.
          </PanelSectionBody>
        </PanelSection>
      </PanelContainer>
      <PanelNavigation>
        <Button
          style={{
            color: "#000000",
            backgroundColor: "#FFFFFF",
            fontWeight: 700,
            textTransform: "none"
          }}
          variant="contained" 
          onClick={() => push("/onboarding/subjects")} >Back</Button>
        <Button
          style={{
            color: "#FFFFFF",
            backgroundColor: "#F68002",
            fontWeight: 700,
            textTransform: "none"
          }}
          variant="contained"
          onClick={() => push("/onboarding/subjectdetails")} >Continue</Button>
      </PanelNavigation>
    </React.Fragment>
  );
}

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
              <Onboard />
            </Route>
          </Switch>
        </PageContentContainer>
      </PageContainer>
    </Router>
  );
}

export default App;
