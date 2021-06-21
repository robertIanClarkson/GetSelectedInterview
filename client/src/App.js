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
  Logo,
  PanelProgress
} from "./StyledComponents";

import Select from 'react-select';
import subjectData from './SubjectData';


class Onboard extends React.Component {
  state = {
    step: 1,
    user: {}
  }

  submit = () => {
    console.log("submit")
  };

  next = () => {
    let currentStep = this.state.step;
    // switch(currentStep) {
    //   case 1:
    //     break;
    //   case 2:
    //     break;
    //   case 3:
    //     break;
    //   default:
    //     break;
    // }
    this.setState({step: currentStep + 1})
  };

  prev = () => {
    let currentStep = this.state.step;
    this.setState({step: currentStep - 1})
  };

  handleChange = () => {
    console.log('handle')
  };

  getCurrentPanel = () => {
    switch(this.state.step) {
      default:
        return <h1>User Forms not working. Enable Javascript!</h1>;
      case 1:
        return (
          <AboutYou 
            user={this.state.user}
            next={this.next}
            handleChange={this.handleChange}
          />
        )
      case 2: 
        return (
          <Subjects 
            user={this.state.user}
            prev={this.prev}
            next={this.next}
            handleChange={this.handleChange}
          />
        )
      case 3:
        return (
          <SubjectDetails 
            user={this.state.user}
            prev={this.prev}
            submit={this.submit}
            handleChange={this.handleChange}
          />
        )
    }
  }

  getHeader = () => {
     return (
      <PanelColumnsContainer>
        <PanelProgress primary={1 === this.state.step}>
          About You
        </PanelProgress>  
        <PanelProgress primary={2 === this.state.step}>
          Subjects
        </PanelProgress>  
        <PanelProgress primary={3 === this.state.step}>
          Subject Details
        </PanelProgress>  
      </PanelColumnsContainer>
     ) 
  };

  render() {
    const { step, user } = this.state;


    let currentHeader = this.getHeader();
    let currentPanel = this.getCurrentPanel(); 

    return (
      <React.Fragment>
        <PanelContainer>
          {currentHeader}
          {currentPanel}
        </PanelContainer>
        {(step !== 1) && <button onClick={this.prev}>Back</button>}
        <button onClick={this.next}>Continue</button>
      </React.Fragment>
    )
    
  }
}

const AboutYou = ({user, next, handleChange}) => {
  return (
    <PanelSection>
      <PanelSectionTitle>
        About You
      </PanelSectionTitle>
      <PanelMainColumn>
        This is some sample text
      </PanelMainColumn>
    </PanelSection>
  )
}

const Subjects = ({user, prev, next, handleChange}) => {
  return (
    <PanelSection>
      <PanelSectionTitle>
        Subjects
      </PanelSectionTitle>
      Select 2 subjects you're most qualified to teach. You can edit these or add more subjects later.
      {/* <Select options={subjectOptions} onChange={handleSubjectChange} />
      {subject !== "" && <Select 
        options={courseOptions} 
        onChange={handleCourseChange}
        isMulti/>} */}
    </PanelSection>
  )
}

const SubjectDetails = ({user, prev, submit, handleChange}) => {
  return (
        <PanelSection>
          <PanelSectionTitle>
            Subject Details
          </PanelSectionTitle>
          <PanelMainColumn>
            This is some sample text
          </PanelMainColumn>
        </PanelSection>
        
  );
}

// const Subjects = () => {
//   const [subject, setSubject] = useState("")
//   const [courses, setCourses] = useState([])

//   let subjectOptions = [];
//   for(const subject of subjectData) {
//     subjectOptions.push({
//       label: subject.name,
//       value: subject.courses
//     });
//   }

//   const handleSubjectChange = (e) => {
//     setSubject(e.label);
//   };

//   const handleCourseChange = (e) => {
//     let temp = []
//     for (const course of e) {
//       temp.push(course.value)
//     }
//     setCourses(temp)
//   };

//   let courseOptions = []
//   if(subject) {
//     for (const course of subjectData.find((sub) => sub.name === subject).courses) {
//       courseOptions.push({
//         value: course,
//         label: course
//       })
//     }
//   }
//   return (
    // <PanelContainer>
    //   <PanelSection>
    //     <PanelSectionTitle>
    //       Subjects
    //     </PanelSectionTitle>
    //     <PanelMainColumn>
    //       Select 2 subjects you're most qualified to teach. You can edit these or add more subjects later.
    //       <Select options={subjectOptions} onChange={handleSubjectChange} />
    //       {subject !== "" && <Select 
    //         options={courseOptions} 
    //         onChange={handleCourseChange}
    //         isMulti/>}
    //     </PanelMainColumn>
    //   </PanelSection>
    //   <button onClick={() => console.log(subject, courses)}>back</button>
    //   <button onClick={() => console.log(subject, courses)}>submit</button>
    // </PanelContainer>
//   );
// };

function App() {
  return (
    <PageContainer>
      <PageNavBar>
        <Logo src="./logo.svg" />
      </PageNavBar>
      <PageContentContainer>
        <Onboard />
      </PageContentContainer>
    </PageContainer>
  );
}

export default App;
