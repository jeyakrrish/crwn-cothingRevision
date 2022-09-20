import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { ReactComponent as Crown } from '../../assets/crown.svg';
import CartIcon from '../cartIcon/cartIcon';
import CartDropdown from '../cartDropdown/cartDropdown';

import { logOut } from '../../utils/firebase-utils';

import { selectCurrentUser } from '../../store/user/user.selector';

import { Navigation, LogoContainer, NavLinksContainer, NavLink, } from './navigation.styles';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

const NavigationBar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

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
                {currentUser.photoURL && <img src={currentUser.photoURL} alt={'user'} />}
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