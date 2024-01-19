import { useSelector, useDispatch } from "react-redux";
import { Link , useHistory} from "react-router-dom/cjs/react-router-dom.min"

const Header = () => {
    const total = useSelector(store => store.total)
    const dispatch = useDispatch()
    const history = useHistory()

    // Clicking on Header Title will reset cart and bring you back to index page
    const handleHome = ()=>{
      dispatch({ type: 'RESET' })
      history.push('/')
    }

  return (
    <header className='App-header'>
        <span className='App-title' onClick={handleHome}>Prime Pizza</span>
        <span>{total}</span>
    </header>
  )
};


export default Header;