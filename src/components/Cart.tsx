import * as React from "react";
import {Product} from "../features/products/models";
import {ProductInCartWithTotal} from "../features/cart/models";
import {ProductInCartCard} from "./ProductInCartCard";
import {CartTotalRow} from "./CartTotalRow";

interface IProps {
    list: ProductInCartWithTotal[];
    total: number;
    increaseQuantity: (product: Product) => void;
    decreaseQuantity: (product: Product) => void;
    removeFromCart: (product: Product) => void;
}

export class Cart extends React.Component<IProps> {
    public render() {
        return (
            <>
                <div>
                    {this.props.list.map((product, key) => {
                        return (
                            <ProductInCartCard
                                product={product}
                                key={key}
                                increaseQuantity={this.handleIncreaseQuantity}
                                decreaseQuantity={this.handleDecreaseQuantity}
                                removeFromCart={this.handleRmoveFromCart}
                            />
                        )
                    })}
                </div>
                <CartTotalRow total={this.props.total}/>
            </>
        )
    }

    private handleIncreaseQuantity = (product: Product) => {
        this.props.increaseQuantity(product);
    };

    private handleDecreaseQuantity = (product: Product) => {
        this.props.decreaseQuantity(product);
    };

    private handleRmoveFromCart = (product: Product) => {
        this.props.removeFromCart(product);
    };
}