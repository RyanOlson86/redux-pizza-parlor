import { Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useHistory} from "react-router-dom/cjs/react-router-dom.min"

const Header = () => {
    const total = useSelector(store => store.total)
    const dispatch = useDispatch()
    const history = useHistory()
    let USDollar = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
  })

    // Clicking on Header Title will reset cart and bring you back to index page
    const handleHome = ()=>{
      dispatch({ type: 'RESET' })
      history.push('/')
    }

  return (
    <header className='App-header'>
        {/* <span className='App-title' onClick={handleHome}>Prime Pizza</span> */}
        {/* <h2 ></h2> */}
        <Typography variant="h2" onClick={handleHome}>Prime Pizza</Typography>
        <Typography variant="BUTTON TEXT"></Typography>
        <span>Total: {USDollar.format(total)}</span>
    </header>
  )
};


export default Header;