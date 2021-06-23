import styled, { css } from "styled-components";
/*
|--------------------------------------------------------------------------
| Page
|--------------------------------------------------------------------------
*/

export const PageContainer = styled.div`
  font-family: "Quicksand", sans-serif;
  min-height: 100vh;
  background: #F8F9FA;
`;
export const PageContentContainer = styled.div`
  position: relative;
  margin: auto;
  max-width: 960px;
  padding: 36px;
  @media (max-width: 720px) {
    padding: 12px;
  }
`;

export const PageTitle = styled.h1`
  font-size: 24px;
  margin-top: 0px;
`;

export const PageNavBar = styled.div`
  background: #FFFFFF;
  // box-shadow: 0px 3px 6px #0000000d;
  box-shadow: 0px 2px 10px 2px rgba(0,0,0,0.1);; 
}
`;

/*
|--------------------------------------------------------------------------
| Panel
|--------------------------------------------------------------------------
*/

export const PanelContainer = styled.div`
  background: white;
  box-shadow: 0px 3px 6px #0000000d;
  border: 1px solid #e3eaef;
  border-radius: 6px;
  margin-bottom: 24px;
  min-height: 400px;
`;
export const PanelContainerHeading = styled.div`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 16px;
  }
`;
export const PanelColumnsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const PanelMainColumn = styled.div`
  flex-grow: 1;
  width: 80%;
  @media (max-width: 720px) {
    width: 100%;
  }
`;
export const PanelSideColumn = styled.div`
  width: 270px;
  margin-left: ${({ marginLeft }) => marginLeft && `20px`};
  margin-right: ${({ marginRight }) => marginRight && `20px`};
`;
export const PanelSection = styled.div`
  padding: 24px;
  border-top: 1px solid #F1F5F7;
  @media (max-width: 720px) {
    padding: 18px;
  }
`;

export const PanelProgress = styled.div`
  display: flex;
  justify-content: center; 
  background: white;
  color: black;
  padding: 18px;
  width: 100%;
  border: 1px solid #F1F5F7;
  font-weight: 700;
  ${props => {
    if (props.primary) {
      return css`
        background: #2E595C;
        color: white;
        @media (max-width: 720px) {
          border-radius: 6px 6px 0px 0px;
        }
      `
    } else {
      return css`
        @media (max-width: 720px) {
          display: none;
        }
      `
    }
  }}
`;

export const PanelSectionTitle = styled.h2`
  font-weight: 700;
  margin: 0px;
`;

export const PanelSectionDescription = styled.h3`
  font-weight: 400;
  color: #69768A;
  line-height: 1.6;
`;

export const PanelSectionBody = styled.div`
  word-wrap: break-word;
  color: #2E595C;
`;

export const SelectTitle = styled.h4`
  font-weight: 600;
  font-size: 1em;
  margin: 0 0 3px;
`;

export const PanelNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

/*
|--------------------------------------------------------------------------
| Form Inputs
|--------------------------------------------------------------------------
*/

export const StyledTextInput = styled.input`
  width: 100%;
  height: 36px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  border-radius: 4px;
  border: 1px solid #e3eaef;
`;

export const Logo = styled.img`
  margin: 5px;
  height: 50px;
  padding-left: 20px;
`;

export const Row = styled.div`

  display: flex;
  flex-direction: row;
  margin: 0px;
  padding-bottom: 12px;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  padding: 10px;
  width: ${({ width }) => width};
  @media (max-width: 720px) {
    width: auto;
  }
`;