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
    >
      <p>From here, I would replace the "Continue" button, with a "Submit" button.
            On submit, we would POST our data to the server to collect into the database.</p>
    </WizardComponent>
  );
};

export default SubjectDetailsComponent;