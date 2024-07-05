import { Link } from 'react-router-dom';
import NavBarStyled from './NavBarStyled';
import navigation from '../../config/navigation';
import logo from '../../assets/8359464a6ea99a9d751d0c6d940cc007.png';

function NavBar() {
  return (
    <NavBarStyled>
      <img src={logo} style={{ width: '70px', height: 'auto' }} />
      {navigation.map(item => (
        <div>
          <Link to={item.url}>{item.label}</Link>
        </div>
      ))}
    </NavBarStyled>
  );
}

export default NavBar;
