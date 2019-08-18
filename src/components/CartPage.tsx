import * as React from "react";
import {ProductsListConnected} from "../connected/ProductsListConnnected";
import styled from "styled-components";
import {CartConnected} from "../connected/CartConnnected";
import {Separator, TopHeader} from "./AppLayout";
import {CartLogoConnected} from "../connected/CartLogoConnected";

const ProductsHeader = styled.h3`
  padding-left: 20px;
`;

export const CartPage: React.FC<{}> = () => {
    return (
        <>
            <TopHeader>
                <a href='/'>
                    <span>The Cart</span>
                </a>
                <Separator/>
                <CartLogoConnected/>
            </TopHeader>
            <CartConnected/>
            <ProductsHeader>Did you forget some cool stuff? Take one more look at my products!</ProductsHeader>
            <ProductsListConnected/>
        </>
    )
};