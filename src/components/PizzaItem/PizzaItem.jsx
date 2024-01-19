import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const PizzaItem = ({ pizza }) => {
  const [isClicked, setIsClicked] = useState(false);
  const cartStore = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (isClicked === false) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          id: pizza.id,
          quantity: 1,
          name: pizza.name,
          price: pizza.price,
        },
      });
      setIsClicked(true);
    } else {
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: {
          id: pizza.id,
          price: pizza.price,
        },
      });
      setIsClicked(false);
    }
  };
  const calculateTotal = () => {
    let total = 0;
    cartStore.forEach((item) => (total += Number(item.price)));
    dispatch({
      type: "UPDATE_TOTAL",
      payload: total,
    });
  };

  return (

    <div style={{ margin: "10px" }}>
      <Card sx={{ width: 400 , height: 350, display: 'flex', flexDirection: 'column', justifyContent:'space-between' }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {pizza.name}
          </Typography>
          <Typography variant="body1">
            {pizza.description}
            <br />${pizza.price}
          </Typography>
        </CardContent>
        <CardActions sx={{flexDirection: 'column'}}>
          <Button size="large" variant="contained" onClick={handleClick}>
            {isClicked ? "Remove" : "Add"}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default PizzaItem;
