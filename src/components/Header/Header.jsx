import { useSelector, useDispatch } from "react-redux";

const Header = () => {
    const total = useSelector(store => store.total)

  return (
    <header className='App-header'>
        <span className='App-title'>Prime Pizza</span>
        <span>{total}</span>
    </header>
  )
};


export default Header;