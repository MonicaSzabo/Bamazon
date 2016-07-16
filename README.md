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

	![Example Customer 1](/images/customer01.png)

	![Example Customer 2](/images/customer02.png)

	![Example Customer 3](/images/customer03.png)

## BamazonManager.js

- run **node BamazonManager.js**
	-  Follow the prompts to "manage" your Bamazon store!
	-  You can view the products, view which products have low inventory, add to the inventory, and add a new product

	![Example Manager 1](/images/manager01.png)
	![Example Manager 2](/images/manager02.png)
	![Example Manager 3](/images/manager03.png)
	![Example Manager 4](/images/manager04.png)
	![Example Manager 5](/images/manager05.png)
	![Example Manager 6](/images/manager06.png)

## BamazonExecutive.js

- run **node BamazonExecutive.js**
	-  Follow the prompts to oversee the departments in your Bamazon store!
	-  You can view the products by the department and see how much they're making or create a new department

	![Example Executive 1](/images/executive01.png)

	![Example Executive 2](/images/executive02.png)