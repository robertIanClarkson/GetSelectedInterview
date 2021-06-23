import { useHistory } from "react-router-dom";
import subjectData from '../../shared/data/SubjectData';
import { Row, Col } from '../../shared/components/StyledComponents';
import WizardComponent from "../../shared/components/WizardComponent";
import SingleSelect from "../../shared/components/SingleSelect";
import MultiSelect from "../../shared/components/MultiSelect";

const SubjectsComponent = ({ user, setUser, isSubjectsSet }) => {

  // push is used for route navigation
  const { push } = useHistory(); 

  /**
   * Set user subject label at index. Used with single select.
   * @param {int} index - index of subject to set
   * @param {str} label - label to set to subject
   */
  const setUserSubject = (index, label) => {
    let newSubjects = user.subjects;
    newSubjects[index] = {
      label: label,
      courses: []
    };
    setUser({
      ...user,
      subjects: newSubjects
    });
  };

  /**
   * Set user courses for subject at index. Used with multiselect
   * @param {int} index - index of subject to set
   * @param {array(str)} courses - courses to set to subject
   */
  const setUserSubjectCourses = (index, courses) => {
    let newSubjects = user.subjects;
    newSubjects[index].courses = courses;
    setUser({
      ...user,
      subjects: newSubjects
    });
  };

  /**
   * Retrieves a list of subject labels not already stored by the user
   * @returns {array(str)} Array[Set(all.labels) - Set(user.labels)]
   */
  const getAvailableSubjectLabels = () => {
    if (user.subjects.length === 0) return subjectData.map(ele => (ele.label));
    let difference = new Set(subjectData.map(ele => (ele.label)));
    let userSubjects = new Set(user.subjects.map(ele => (ele.label)));
    for (let subject of userSubjects) {
      difference.delete(subject);
    }
    return Array.from(difference);
  };

  return (
    <WizardComponent
      progressTitles={["About You", "Subjects", "Subject Details"]}
      title={"Subjects"}
      description={"Select 2 subjects you're most qualified to teach. You can edit these or add more subjects later."}
      backAction={() => push("/onboarding/aboutyou")}
      continueAction={() => push("/onboarding/subjectdetails")}
      isContinueActive={isSubjectsSet(2)} >
      
      {/* Content */}
      <Row>
        {/* Subject 1 subject singleselect */}
        <Col width={"30%"}>
          <SingleSelect
            title={"Subject"}
            value={user.subjects.length > 0 && user.subjects[0].label}
            options={getAvailableSubjectLabels()}
            onChange={e => setUserSubject(0, e.label)} />
        </Col>
        
        {/* Subject 1 courses multiselect */}
        {user.subjects.length > 0 &&
          <Col width="68%">
            <MultiSelect
              title={"Courses"}
              values={user.subjects[0].courses}
              options={subjectData.find(ele => ele.label === user.subjects[0].label).courses.map(ele => ({ label: ele, value: ele.toLowerCase() }))}
              onChange={selected => setUserSubjectCourses(0, selected.map(ele => (ele.label)))} />
          </Col>}
      </Row>
      {/* Subject 2 subject singleselect */}
      {user.subjects.length > 0 && user.subjects[0].courses.length > 0 &&
        <Row>
          <Col width={"30%"}>
            <SingleSelect
              title={"Subject"}
              value={user.subjects.length > 1 && user.subjects[1].label}
              options={getAvailableSubjectLabels()}
              onChange={e => setUserSubject(1, e.label)} />
          </Col>
          {/* Subject 2 subject multiselect */}
          {user.subjects.length > 1 &&
            <Col width="68%">
              <MultiSelect
                title={"Courses"}
                values={user.subjects[1].courses}
                options={subjectData.find(ele => ele.label === user.subjects[1].label).courses.map(ele => ({ label: ele, value: ele.toLowerCase() }))}
                onChange={selected => setUserSubjectCourses(1, selected.map(ele => (ele.label)))} />
            </Col>}
        </Row>}

    </WizardComponent>
  );
};

export default SubjectsComponent;