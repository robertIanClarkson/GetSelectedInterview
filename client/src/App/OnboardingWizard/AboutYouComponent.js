import { useHistory } from "react-router-dom";
import WizardComponent from "../../shared/components/WizardComponent";

const AboutYouComponent = ({ user }) => {

  // push is used for route navigation
  const { push } = useHistory();
  
  return (
    <WizardComponent
      progressTitles={["About You", "Subjects", "Subject Details"]}
      title={"About You"}
      description={"Here is some hardcoded sample data. It allows you to travel to part (2)Subjects"}
      backAction={() => console.log("IGNORE", user)}
      continueAction={() => push("/onboarding/subjects")}
      isContinueActive={true}
    >
      <h3>Current User State:</h3>
      <p>{JSON.stringify(user)}</p>
    </WizardComponent>
  );
};

export default AboutYouComponent;