import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import DeliveryIcon from "@mui/icons-material/DeliveryDining";

const MenuCard = ({ menu }) => {
  return (
    <Card className="menu-card">
      <img className="card-media" src={menu.image} alt={menu.name} />
      <CardContent>
        <div className="card-title-and-price">
          <h3>{menu.name}</h3>
          <span>{menu.price}</span>
        </div>
        <p>{menu.description}</p>
      </CardContent>
      <CardActions>
        <Button className="card-button" size="small">
          Order a delivery
          <DeliveryIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default MenuCard;
