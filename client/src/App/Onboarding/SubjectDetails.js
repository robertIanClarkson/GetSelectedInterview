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

const SubjectDetails = ({user, setUser}) => {
  const { push } = useHistory();
  return (
    <Fragment>
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
        <BackButton onClick={() => push("/onboarding/subjects")}/>
        <ContinueButton onClick={() => console.log("SUBMIT:", user)} />
      </PanelNavigation>
    </Fragment>
  );
};

export default SubjectDetails;