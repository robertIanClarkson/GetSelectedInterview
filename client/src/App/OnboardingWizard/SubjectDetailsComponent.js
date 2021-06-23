import { useHistory } from "react-router-dom";

import WizardComponent from "../../shared/components/WizardComponent";

const SubjectDetailsComponent = ({ user }) => {
  const { push } = useHistory();

  return (
    <WizardComponent
      progressTitles={["About You", "Subjects", "Subject Details"]}
      title={"Subject Details"}
      description={"You successfully made it to the final section!"}
      backAction={() => push("/onboarding/subjects")}
      continueAction={() => console.log("SUBMIT:", user)}
      isContinueActive={false}
    >
      <h3>Current User State:</h3>
      <p>{JSON.stringify(user)}</p>
    </WizardComponent>
  );
};

export default SubjectDetailsComponent;
