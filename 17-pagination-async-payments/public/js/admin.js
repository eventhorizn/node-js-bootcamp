const deleteProduct = (btn) => {
	const prodId = btn.parentNode.querySelector('[name=productId').value;
	const csrf = btn.parentNode.querySelector('[name=_csrf').value;
	const prodElement = btn.closest('article');

	// fetch can also post, delete
	fetch('/admin/product/' + prodId, {
		method: 'DELETE',
		headers: {
			'csrf-token': csrf,
		},
	})
		.then((result) => {
			return result.json();
		})
		.then((data) => {
			// not required to chain this, can delete above
			// Modern
			prodElement.remove();

			// IE
			//productElement.parentNode.removeChild(prodElement);
		})
		.catch((err) => {
			console.log(err);
		});
};
