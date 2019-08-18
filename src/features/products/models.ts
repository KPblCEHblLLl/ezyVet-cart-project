export type Product = {
    name: string;
    price: number;
}

export type ProductWithCartMark = Product & {
    inCart: boolean;
}