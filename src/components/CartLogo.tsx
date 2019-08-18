import * as React from "react";
import {formatPrice} from "../utils/formatPrice";
import carticon from "./shopping-cart-symbol.png";
import styled from "styled-components";

interface IProps {
    totalPrice: number;
    totalQuantity: number;
}

const Layout = styled.div`
  display: flex;
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
`;
const Quantity = styled.div`
  margin-left: 10px;
  line-height: 32px;
`;

export const CartLogo: React.FC<IProps> = (props) => {
    return (
        <Layout>
            <Logo src={carticon} alt='cart'/>
            {props.totalQuantity !== 0 && <>
                <Quantity>{props.totalQuantity}</Quantity>
                <Quantity>({formatPrice(props.totalPrice)})</Quantity>
            </>
            }
        </Layout>
    )
};