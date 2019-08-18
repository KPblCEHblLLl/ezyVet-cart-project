import {RootState} from '../store/types';
import {connect} from 'react-redux';

import {cartSelectors} from '../features/cart';
import {CartLogo} from "../components/CartLogo";

const mapStateToProps = (state: RootState) => ({
    totalQuantity: cartSelectors.countCartItems(state),
    totalPrice: cartSelectors.getCartTotal(state),
});

export const CartLogoConnected = connect(
    mapStateToProps,
)(CartLogo);
