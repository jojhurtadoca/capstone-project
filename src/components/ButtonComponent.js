import { Button } from "@mui/material";
import React from "react";

const ButtonComponent = ({ label, onClick, ...rest }) => {
  return (
    <Button className="button-component" onClick={onClick} {...rest}>
      {label}
    </Button>
  );
};

export default ButtonComponent;
