import {RootState} from '../store/types';
import {connect} from 'react-redux';

import {productsActions, productsSelectors} from '../features/products';
import {cartActions} from '../features/cart';
import {ProductsList} from '../components/ProductsList';

const mapStateToProps = (state: RootState) => ({
    list: productsSelectors.getProductsWithCartMark(state),
});

const dispatchProps = {
    loadProducts: productsActions.loadProducts,
    addProductToCart: cartActions.addToCart,
};

export const ProductsListConnected = connect(
    mapStateToProps,
    dispatchProps
)(ProductsList);
