import * as React from "react";
import styled from "styled-components";
import {formatPrice} from "../utils/formatPrice";

const Row = styled.div`
  padding: 10px 20px;
  display: flex;
  font-weight: bold;
`;
const Separator = styled.div`
    flex: 1;
`;

interface IProps {
    total: number
}

export const CartTotalRow: React.FC<IProps> = (props) => {
    return (
        <Row>
            <span>Total</span>
            <Separator/>
            <span>{formatPrice(props.total)}</span>
        </Row>
    )
};