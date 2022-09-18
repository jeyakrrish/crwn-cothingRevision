import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as Crown } from '../../assets/crown.svg';
import CartIcon from '../cartIcon/cartIcon';
import CartDropdown from '../cartDropdown/cartDropdown';

import { logOut } from '../../utils/firebase-utils';

import { UserContext } from '../../context/userContext';
import { CartContext } from '../../context/cartContext';

import { Navigation, LogoContainer, NavLinksContainer, NavLink, } from './navigation.styles';
// import './navigation.styles.scss';

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOut = async () => await logOut();


  return (
    <>
      <Navigation >
        <LogoContainer to='/'>
          <Crown />
        </LogoContainer>

        <NavLinksContainer>
          <NavLink to='/shop'>SHOP</NavLink>
          {
            !currentUser ? <NavLink to='/auth'>SIGN IN</NavLink> :
              <NavLink as='span' onClick={signOut}
              >
                <img src={currentUser.photoURL} alt={currentUser.displayName} />
                <p>SIGN OUT</p>
              </NavLink>
          }
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </Navigation >

      <Outlet />
    </>
  )
}

export default NavigationBar;