import { Button } from '@material-ui/core';

const ContinueButton = ({ onClick, isActive }) => {
  return (
    <Button
      color="primary"
      variant="contained"
      onClick={onClick}
      disabled={!isActive}
    >Continue</Button>
  );
};

export default ContinueButton;