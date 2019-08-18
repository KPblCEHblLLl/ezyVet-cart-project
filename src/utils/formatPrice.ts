// toFixed will give some errors.
// But definitely, you do not want to use a client-side JavaScript for any math with decimals
// expecialy for money
export const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
};