import * as React from "react";
import {Product} from "../features/products/models";
import styled from "styled-components";
import {ProductInCartWithTotal} from "../features/cart/models";
import {formatPrice} from "../utils/formatPrice";

const Card = styled.div`
  padding: 10px 20px;
  display: flex;
`;

const Separator = styled.div`
  flex: 1;
`;

const Cell = styled.div`
  margin: 0 10px;
`;

const Button = styled.button`
  margin: 0 5px;
`;

interface IProps {
    product: ProductInCartWithTotal;
    increaseQuantity: (product: Product) => void;
    decreaseQuantity: (product: Product) => void;
    removeFromCart: (product: Product) => void;
}

export const ProductInCartCard: React.FC<IProps> = (props) => {
    const {product, increaseQuantity, decreaseQuantity, removeFromCart} = props;

    return (
        <>
            <Card>
                <div>{product.name}</div>
                <Separator/>
                <Cell>{formatPrice(product.price)}</Cell>
                <Cell>qty: {product.quantity}</Cell>
                <Cell>total: {formatPrice(product.total)}</Cell>
                <Button onClick={(e) => increaseQuantity(product)}>increaseQuantity</Button>
                <Button onClick={(e) => decreaseQuantity(product)}>decreaseQuantity</Button>
                <Button onClick={(e) => removeFromCart(product)}>removeProduct</Button>
            </Card>
            <hr/>
        </>
    )
};
