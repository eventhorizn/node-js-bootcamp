const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(require.main.filename), 'data', 'cart.json');

module.exports = class Cart {
	static addProduct(id, productPrice) {
		// Fetch previous cart
		fs.readFile(p, (err, data) => {
			let cart = { products: [], totalPrice: 0 };

			if (!err) {
				cart = JSON.parse(data);
			}

			// Analyze cart => find existing product
			const existingProductIndex = cart.products.findIndex(
				(prod) => prod.id === id
			);
			const existingProduct = cart.products[existingProductIndex];
			let updatedProduct;

			// add new product/increase quantity
			if (existingProduct) {
				updatedProduct = { ...existingProduct };
				updatedProduct.qty = updatedProduct.qty + 1;
				cart.products = [...cart.products];
				cart.products[existingProductIndex] = updatedProduct;
			} else {
				updatedProduct = { id: id, qty: 1 };
				cart.products = [...cart.products, updatedProduct];
			}

			cart.totalPrice = +cart.totalPrice + +productPrice;
			fs.writeFile(p, JSON.stringify(cart), (err) => {
				if (err) console.log(err);
			});
		});
	}

	static deleteProduct(id, productPrice) {
		fs.readFile(p, (err, data) => {
			if (err) return;

			const updatedCart = { ...JSON.parse(data) };
			const product = updatedCart.products.find((p) => +p.id === +id);
			const prodQty = product.qty;

			updatedCart.products = updatedCart.products.filter((p) => +p.id !== +id);
			updatedCart.totalPrice = updatedCart.totalPrice - productPrice * prodQty;

			fs.writeFile(p, JSON.stringify(updatedCart), (err) => {
				if (err) console.log(err);
			});
		});
	}
};
