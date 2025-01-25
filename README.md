# Title

    Interactive Bookstore Application

## Objective

    Build an application that allows users to browse and search for books, view book details, add books to a shopping cart, and place an order.

## Tech Stack

    Frontend - React JS (React Router, Redux or React Context API, CSS or CSS frameworks, Git, and GitHub for hosting the repository.)

## Completion Instructions

### Functionality

#### Must Have

* Build a ReactJS application with multiple pages/components, including Home, Book Listing, Book Details, Shopping Cart, and Checkout pages.
* Implement features such as book search, book filtering, adding to cart, removing from cart, and order placement.

    > Page: Home
    * Page Details:
        Header - links for pages Home, Book List, Cart
        Banner - Heading, description, and “Explore Books” Button
    * Navigation: /

    > Page: Book List
    * Page Details:
        Header - links for pages Home, Book List, Cart, Book Items (title, subtitle, image, price ), Search (by title, author), Filter (by Price)
    * Navigation:
        "Book List" link in Header,
        "Explore Books" Button,
        "Back" Button in Book Details Page.

    > Page: Book Details
    * Page Details:
        Book detailed Information (title, subtitle, image, description, price),
        "Add to cart" Button,
        "Back" button.
    * Navigation: Each Book Item in Book List Page

    > Page: Cart
    * Page Details:
        Cart Items (title, subtitle, image, price),
        "Remove" Button,
        Order Summary,
        "Checkout" Button
    * Navigation:
        "Cart" link in Header
        "Back" Button in Checkout Page

    > Page: Checkout
    * Page Details:
        "Back" Button,
        Order Form (Personal Details, Summary, Place Order).
    * Navigation:
        Checkout in Cart.


#### Nice to Have

   Bonus tasks include implementing user authentication, unit tests, and deploying the application on a hosting platform.

### Guidelines to develop a project
#### Must Have

* Utilize GitHub
    * Commit code regularly and commit messages should be clear
    * Include a README file explaining the project setup, usage instructions, and any additional information
    * The repo should be well organized and easy to understand.
    * The code should be clean, modular, and well-structured
* The application should be visually appealing.
* The application should handle all the errors.

#### Nice to Have

* Implement Unit Tests

### Submission Instructions

#### Must Have
* Github Repository

#### Nice to Have
* Deploy the application on a hoisting platform

Routes
|Page       |  Route  |  Path|
|:----------|:------------------|:-----------------|
|Home       |  Home      |  / |
|Book List  |  Book List  |  /books|
|Book Details|	Book Details|	/books/:id|
|Cart|	Cart|	/cart|
|Checkout|	Checkout|	/checkout|
|Not Found|	Not Found|	/not-found|

Technical Details
Routes & Components

Home

|Component|	Details	State|	API| (IT Bookstore)|
|:----------:|:------------------:|:-----------------:|:------------------:|
|Home|	Heading, Description, and "ExploreBooks" button|	-|	-|
|Header|	links for pages Home, Book List, Cart|	-|	-|

Book List
|Component|	Details|	State|	API (IT Bookstore)|
|:----------:|:------------------:|:-----------------:|:------------------:|
|BookList|		|apiStatus, booksData, priceRangeValue|	/new|
|Header|	links for pages Home, Book List, Cart|	-|	-|
|SearchInput|	Search (by title, author)|	searchInputValue|	/search/{query}|
|PriceRange|	Filter (by price)|	-|	-|
|BookItem|	Book Items (title, subtitle, image, price)|	-|	-|
|Loader|		|-|	-|
|ErrorMessage|		|-|	-|

Book Details
|Component|	Details|	State|	API (IT Bookstore)|
|:----------:|:------------------:|:-----------------:|:------------------:|
|BookDetails|	Book detailed Information - image, title, subtitle, price, description, etc., “Add to cart” Button, “Back” button|	apiStatus, bookDetailsData|	/books/{isbn}|
|Header|	links for pages Home, Book List, Cart|	-|	-|
|Loader|		|-|	-|
|ErrorMessage|		|-|	-|

Cart
|Components|	Details|	State|	API (IT Bookstore)|
|:----------:|:------------------:|:-----------------:|:------------------:|
|Cart|	Cart Items, “Remove” Button, Order Summary, “Checkout” Button|	(Context Consumer)|	-|
|Header|	links for pages Home, Book List, Cart|	-|	-|
|CartItem|	Book Detailed Info (image, title, subtitle, price, description)|	(Context Consumer)|	-|

Checkout
|Components|	Details|	State|	API (IT Bookstore)|
|:----------:|:------------------:|:-----------------:|:------------------:|
|Checkout|	“Back” button|	(Context Consumer)|	-|
|UserDetailsForm|	Order Form - Personal Details - First Name, Last Name, Email, Mobile No. , Place Order Button, Order Summary|	userDetails, isFormSubmitted|	-|

Not Found
|Components|	Details|	State|	API (IT Bookstore)|
|:----------:|:------------------:|:-----------------:|:------------------:|
|NotFound|	-|	-|	-|
|Header|	links for pages Home, Book List, Cart|	Header|	links for pages Home, Book List, Cart|

App
|Component|	Details|	State|	API (IT Bookstore)|
|:----------:|:------------------:|:-----------------:|:------------------:|
|App|	-|	cartList (Context Provider), Context: cartList, addToCart, deleteFromCart|	-|

## Resources
### Design files
Home, Book Lists, Book Details, Shopping Cart, Checkout
Reference: crossword.in

### APIs
Books, Book Details, Search
Api Reference: api.itbook.store

### Third-party packages
* React Router (react-router-dom)
* Icons: react-icons
* Loader: react-loader-spinner
* Range Slider: rc-slider

-----------------------------------------------------------------------------------------------------------------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
