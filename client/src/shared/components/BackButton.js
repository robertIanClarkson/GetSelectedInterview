import { Button } from '@material-ui/core';

const BackButton = ({onClick}) => {
  return (
    <Button
      style={{
        color: "#000000",
        backgroundColor: "#FFFFFF",
        fontWeight: 700,
        textTransform: "none"
      }}
      variant="contained" 
      color="secondary" 
      onClick={onClick} >Back</Button>
  );
};

export default BackButton;