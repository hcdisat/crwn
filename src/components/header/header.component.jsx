import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
import auth from "../../services/auth-service";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, cartVisibility }) => (
  <div className="header">
    <Link classaname="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          LOGOUT
        </div>
      ) : (
        <Link className="option" to="/sign-in">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {!cartVisibility && <CartDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  cartVisibility: hidden
});
export default connect(mapStateToProps)(Header);
// export default Header;
