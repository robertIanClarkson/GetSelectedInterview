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
  Logo
} from "./StyledComponents";

function App() {
  return (
    <PageContainer>
      <PageNavBar>
        <Logo src="./logo.svg" />
      </PageNavBar>
      <PageContentContainer>
        <PageTitle>Teacher Search</PageTitle>
      </PageContentContainer>
    </PageContainer>
  );
}

export default App;
