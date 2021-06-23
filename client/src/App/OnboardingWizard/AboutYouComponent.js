import { useHistory } from "react-router-dom";
import WizardComponent from "../../shared/components/WizardComponent";

const AboutYouComponent = ({ user }) => {
  const { push } = useHistory();
  return (
    <WizardComponent 
        progressTitles={["About You", "Subjects", "Subject Details"]}
        title={"About You"}
        description={"Here is some hardcoded sample data. It allows you to travel to part (2)Subjects"}
        backAction={() => console.log("IGNORE", user)}
        continueAction={() => push("/onboarding/subjects")}
    >
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
    </WizardComponent>
  );
};

export default AboutYouComponent;