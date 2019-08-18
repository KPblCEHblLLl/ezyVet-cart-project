import {RootState} from '../store/types';
import {connect} from 'react-redux';

import {cartActions, cartSelectors} from '../features/cart';
import {Cart} from '../components/Cart';

const mapStateToProps = (state: RootState) => ({
    list: cartSelectors.getCartProducts(state),
    total: cartSelectors.getCartTotal(state),
});

const dispatchProps = {
    increaseQuantity: cartActions.increaseQuantity,
    decreaseQuantity: cartActions.decreaseQuantity,
    removeFromCart: cartActions.removeFromCart,
};

export const CartConnected = connect(
    mapStateToProps,
    dispatchProps
)(Cart);
