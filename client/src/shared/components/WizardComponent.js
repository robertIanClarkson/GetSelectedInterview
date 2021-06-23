import { Fragment } from "react";
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

const WizardComponent = ({ progressTitles, title, description, children, backAction, continueAction, isContinueActive }) => {
  if (progressTitles.length !== 3) return (<h1>Error: Must provide 3 progressTitles</h1>)

  return (
    <Fragment>
      <PanelContainer>
        <PanelColumnsContainer>
          <PanelProgress
            primary={progressTitles[0] === title}>1 {progressTitles[0]}</PanelProgress>
          <PanelProgress
            primary={progressTitles[1] === title}>2 {progressTitles[1]}</PanelProgress>
          <PanelProgress
            primary={progressTitles[2] === title}>3 {progressTitles[2]}</PanelProgress>
        </PanelColumnsContainer>
        <PanelSection>
          <PanelSectionTitle>{title}</PanelSectionTitle>
          <PanelSectionDescription>
            {description}
          </PanelSectionDescription>
          <PanelSectionBody>
            {children}
          </PanelSectionBody>
        </PanelSection>
      </PanelContainer>
      <PanelNavigation>
        <BackButton onClick={backAction} />
        <ContinueButton onClick={continueAction} isActive={isContinueActive} />
      </PanelNavigation>
    </Fragment>
  );
};

export default WizardComponent;