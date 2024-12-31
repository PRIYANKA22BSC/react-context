# React Context for Cart State Management

Live Demo-https://react-context-black.vercel.app/

This project demonstrates the use of React Context to manage the cart state across multiple pages, specifically between a Shop page and a Payment page. The cart state is shared seamlessly without prop drilling, ensuring a clean and maintainable codebase.

## Features

1. **Global State Management**:
   - Cart state is stored in a centralized context.
   - Accessible across components and pages without passing props.
2. **Shop Page**:
   - Displays a list of products with an "Add to Cart" button.
   - Updates the cart state dynamically.
3. **Payment Page**:
   - Displays the cart's contents with the total price.
   - Allows users to proceed with payment or adjust cart items.
4. **Context API**:
   - Uses React's `createContext` and `useContext` for efficient state sharing.
5. **Dynamic Updates**:
   - Changes in the cart are reflected in real-time across all pages.

## Technologies Used

- React.js
- React Context API
- JavaScript (ES6+)
- CSS (for styling)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-context-cart.git
   ```
2. Navigate to the project directory:
   ```bash
   cd react-context-cart
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and navigate to `http://localhost:3000` to view the app.

## Code Structure

### `CartContext.js`

- Creates the context for the cart.
- Provides the `CartProvider` component to wrap the application and share state.
- Contains functions to add, remove, and update items in the cart.

### `App.js`

- Sets up routing for the Shop and Payment pages.
- Wraps the application with the `CartProvider`.

### `pages/Shop.js`

- Displays a list of products with an option to add them to the cart.

### `pages/Payment.js`

- Displays cart items with their quantities and total price.
- Allows users to modify the cart or proceed with payment.

### `components/ProductCard.js`

- Represents individual products in the shop.
- Includes "Add to Cart" functionality.

### `components/CartSummary.js`

- Displays a summary of the cart contents.
- Used on the Payment page.

## Usage

1. Navigate to the Shop page to view the list of products.
2. Click "Add to Cart" to add a product to the cart.
3. Navigate to the Payment page to view the cart's contents.
4. Adjust quantities or proceed to payment on the Payment page.

## Example

### Adding a Product

1. Go to the Shop page.
2. Click "Add to Cart" on a product.
3. The cart state is updated and can be viewed on the Payment page.

### Adjusting the Cart

1. Navigate to the Payment page.
2. Increase or decrease the quantity of a product in the cart.
3. The cart summary and total price update dynamically.

## Contributing

Feel free to fork this repository and submit pull requests to enhance the functionality or fix issues.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
