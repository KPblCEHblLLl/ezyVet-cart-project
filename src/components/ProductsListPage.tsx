import * as React from "react";
import {ProductsListConnected} from "../connected/ProductsListConnnected";
import styled from "styled-components";
import {Separator, TopHeader} from "./AppLayout";
import {CartLogoConnected} from "../connected/CartLogoConnected";

const ProductsHeader = styled.h3`
  padding-left: 20px;
`;

export const ProductsListPage: React.FC<{}> = () => {
    return (
        <>
            <TopHeader>
                <span>The Cart</span>
                <Separator/>
                <a href='/cart'>
                    <CartLogoConnected/>
                </a>
            </TopHeader>
            <ProductsHeader>Take a look at my products!</ProductsHeader>
            <ProductsListConnected/>
        </>
    )
};