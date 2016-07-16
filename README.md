# Bamazon

Requires a keys.js file to run.  Should be formatted as follows:

```javascript
exports.connection = {
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'password',
	database: 'bamazon'
};
```

You will also need to run **npm install** to get the right packages from the package.json

## BamazonCustomer.js

- run **node BamazonCustomer.js**
	-  Follow the prompts to "shop" from Bamazon!

## BamazonManager.js

- run **node BamazonManager.js**
	-  Follow the prompts to "manage" your Bamazon store!
	-  You can view the products, view which products have low inventory, add to the inventory, and add a new product

## BamazonExecutive.js

- run **node BamazonExecutive.js**
	-  Follow the prompts to oversee the departments in your Bamazon store!
	-  You can view the products by the department and see how much they're making or create a new department
