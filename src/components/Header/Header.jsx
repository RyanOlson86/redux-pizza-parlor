import { Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const total = useSelector((store) => store.total);
  const dispatch = useDispatch();
  const history = useHistory();
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  // Clicking on Header Title will reset cart and bring you back to index page
  const handleHome = () => {
    dispatch({ type: "RESET" });
    history.push("/");
  };

  return (
    <header className="App-header">
      {/* <span className='App-title' onClick={handleHome}>Prime Pizza</span> */}
      {/* <h2 ></h2> */}
      <Typography variant="h2" onClick={handleHome} sx={{ width: "430px", display: "flex", alignItems: "center" }}>
        <LocalPizzaIcon fontSize="larger" />
        Prime Pizza
        <LocalPizzaIcon fontSize="larger" />
      </Typography>
      <Typography variant="BUTTON TEXT"></Typography>
      <Typography sx={{ display: "flex", justifyContent: "center", alignItems: 'center', fontSize:'24px' }}>
        <ShoppingCartIcon sx={{ marginRight: "8px" }} />
        Total: {USDollar.format(total)}
      </Typography>
    </header>
  );
};

export default Header;
