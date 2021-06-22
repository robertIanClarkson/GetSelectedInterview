import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import {
  PanelContainer,
  PanelColumnsContainer,
  PanelSection,
  PanelSectionTitle,
  PanelProgress,
  PanelSectionDescription,
  PanelSectionBody,
  PanelNavigation
} from "../../shared/components/StyledComponents";

import BackButton from '../../shared/components/BackButton';
import ContinueButton from '../../shared/components/ContinueButton';

const AboutYou = ({user, setUser}) => {
  const { push } = useHistory();
  return (
    <Fragment>
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
        <BackButton onClick={() => console.log("IGNORE")}/>
        <ContinueButton onClick={() => push("/onboarding/subjects")} />
      </PanelNavigation>
    </Fragment>
  );
};

export default AboutYou;