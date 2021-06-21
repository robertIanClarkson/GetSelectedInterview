import React, { useState } from 'react';
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
  Logo
} from "./StyledComponents";

import Select from 'react-select';
import subjectData from './SubjectData';


const Onboarding = () => {
  const [subject, setSubject] = useState("")
  const [courses, setCourses] = useState([])

  let subjectOptions = [];
  for(const subject of subjectData){
    subjectOptions.push({
      label: subject.name,
      value: subject.courses
    });
  }

  const handleSubjectChange = (e) => {
    setSubject(e.label);
  };

  const handleCourseChange = (e) => {
    let temp = []
    for (const course of e) {
      temp.push(course.value)
    }
    setCourses(temp)
  };

  let courseOptions = []
  if(subject) {
    for (const course of subjectData.find((sub) => sub.name === subject).courses) {
      courseOptions.push({
        value: course,
        label: course
      })
    }
  }
  return (
    <PanelContainer>
      <PanelSection>
        <PanelSectionTitle>
          Subjects
        </PanelSectionTitle>
        <PanelMainColumn>
          Select 2 subjects you're most qualified to teach. You can edit these or add more subjects later.
          <Select options={subjectOptions} onChange={handleSubjectChange} />
          {subject !== "" && <Select 
            options={courseOptions} 
            onChange={handleCourseChange}
            isMulti/>}
        </PanelMainColumn>
      </PanelSection>
      <button onClick={() => console.log(subject, courses)}>back</button>
      <button onClick={() => console.log(subject, courses)}>submit</button>
    </PanelContainer>
  );
};

function App() {
  return (
    <PageContainer>
      <PageNavBar>
        <Logo src="./logo.svg" />
      </PageNavBar>
      <PageContentContainer>
        <Onboarding />
      </PageContentContainer>
    </PageContainer>
  );
}

export default App;
