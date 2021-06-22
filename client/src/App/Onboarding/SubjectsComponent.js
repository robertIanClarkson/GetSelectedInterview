import { useHistory } from "react-router-dom";

import Select from 'react-select';
import subjectData from '../../shared/data/SubjectData';

import { PanelSectionHeader, Row, Col } from '../../shared/components/StyledComponents';

import WizardComponent from "../../shared/components/WizardComponent";

const SubjectsComponent = ({user, setUser}) => {    

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
    <WizardComponent 
        progressTitles={["About You", "Subjects", "Subject Details"]}
        title={"Subjects"}
        description={"Select 2 subjects you're most qualified to teach. You can edit these or add more subjects later."}
        backAction={() => push("/onboarding/aboutyou")}
        continueAction={() => push("/onboarding/subjectdetails")}
    >
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
    </WizardComponent>
  );

          // <PanelSectionBody>
          //   <Row> 
          //     <Col width={"30%"}>
          //       <PanelSectionHeader>Subject</PanelSectionHeader>
          //       <Select
          //         defaultValue={user.subject_0}
          //         options={subjectOptions_0} 
          //         onChange={(subject) => setSubject(0, subject)} />
          //     </Col>
          //     <Col width={"70%"}>
          //       <PanelSectionHeader>Courses</PanelSectionHeader>
          //       <Select 
          //           value={user.courses_0}
          //           options={courseOptions_0} 
          //           onChange={(courses) => setCourses(0, courses)}
          //           isMulti/>
          //     </Col>
          //   </Row>
          //   <Row>
          //     <Col width={"30%"}>
          //       <PanelSectionHeader>Subject</PanelSectionHeader>
          //       {user.subject_0 !== null && <Select 
          //         defaultValue={user.subject_1}
          //         options={subjectOptions_1} 
          //         onChange={(subject) => setSubject(1, subject)} />}
          //     </Col>
          //     <Col width={"70%"}>
          //       <PanelSectionHeader>Courses</PanelSectionHeader>
          //       {user.subject_0 !== null && <Select 
          //         value={user.courses_1}
          //         options={courseOptions_1} 
          //         onChange={(courses) => setCourses(1, courses)}
          //         isMulti/>}
          //     </Col>
          //   </Row>
          // </PanelSectionBody>
};

export default SubjectsComponent;