# GetSelectedInterview

- DEPLOYED: https://stormy-hamlet-77625.herokuapp.com/

- Developed June 2021
- Node.JS Version=14.17.1 (stable)
- NPM Version=7.18.1 (stable)

## Solution

### Pieces:

  1. Basic Router.
  2. Custom `OnboaringComponent` which holds onboarding routing, validation, & `user` state.
  3. Custom `WizardComponent` which works as a setup-wizard-type template for each panel (AboutYou/Subjects/SubjectDetails).
  4. Custom `BackButton` & `ContinueButton` with custom color scheme and ability to disable `ContinueButton`.
  5. Custom panels `AboutYouComponent`, `SubjectsComponent`, `SubjectDetailsComponent` to give each `WizardComponent` their custom content.
  6. Custom `SingleSelect` & `MultiSelect` components with custom styling and input titles.
  7. Updated `StyledComponents` from the first excersise with additional webpage organizing & styling.

### Process:

`/client/src/App/Onboarding/index.js` holds the user state & methods for validation. `/client/src/App/Onboarding/SubjectsComponent` is the main file of this project and holds most of the logic. `SubjectsComponent` renders `SingleSelect` & `MultiSelect` based on the state of `user`. Once `user` contains 2 subjects w/ courses, it is considered validated. When validated, the `ContinueButton` is enabled and the user can travel to the next onboarding step. Since this project is utilizing Routing, validation must also be done around the next route(`SubjectDetailsComponent`) in order to stop the user from bypassing this step by entering the goal URL by hand. Therefore, a user may only access the next step if and only if their `user` state holds the appropiate data. 

### Possible Improvements:

2 improvements that come to mind.
  1. improvement would be to cache this `user` state in the browser so that if the user leaves the page, their data(responses) would not be lost.
  2. Another improvement would be to either POST `user` to the server on successful "Continue". You could potentially also use websockets to communicate the `user` state to the server.

### Technologies Used:
  - `react`
  - `react-select`
  - `styled-components`
  - `@material-ui/core`
  - `express`
  - `dotenv`
  - `heroku`
  - `git`
  - `NodeJS`
