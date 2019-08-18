import * as React from "react";
import {Product, ProductWithCartMark} from "../features/products/models";
import {ProductCard} from "./ProductCard";

interface IProps {
    list: ProductWithCartMark[];
    loadProducts: () => void;
    addProductToCart: (product: Product) => void;
}

export class ProductsList extends React.Component<IProps> {
    public componentDidMount(): void {
        this.props.loadProducts();
    }

    public render() {
        return (
            <div>
                {this.props.list.map((product, key) => {
                    return (
                        <ProductCard
                            product={product}
                            key={key}
                            addToCart={this.handleAddToCart}
                        />
                    )
                })}
            </div>
        )
    }

    private handleAddToCart = (product: Product) => {
        this.props.addProductToCart(product);
    };
}