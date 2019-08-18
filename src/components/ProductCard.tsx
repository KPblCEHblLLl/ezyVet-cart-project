import * as React from "react";
import {Product, ProductWithCartMark} from "../features/products/models";
import styled from "styled-components";
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
    product: ProductWithCartMark;
    addToCart: (product: Product) => void;
}

export const ProductCard: React.FC<IProps> = (props) => {
    const {product, addToCart} = props;

    return (
        <>
            <Card>
                <div>{product.name}</div>
                <Separator/>
                <Cell>{formatPrice(product.price)}</Cell>
                <Button onClick={(e) => addToCart(product)}>add to cart</Button>
                {product.inCart && <a href='/cart'>see in cart</a>}
            </Card>
            <hr/>
        </>
    )
};
