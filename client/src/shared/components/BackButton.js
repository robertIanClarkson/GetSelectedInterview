import { Button } from '@material-ui/core';

const BackButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={onClick} >Back</Button>
  );
};

export default BackButton;