import './06-function-destructuring'
import { Product, taxCalculation } from './06-function-destructuring'

 const shoppingCart: Product[] = [
    {
        description: 'Nokia A1',
        price: 150.00
    },
    {
        description: 'iPad Air',
        price: 250.00
    }
];
//tax = 0.15
const [total, tax] = taxCalculation({
    products: shoppingCart, 
    tax: 0.15
});

console.log('Total', total);
console.log('Tax',tax);