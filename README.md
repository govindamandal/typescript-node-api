# typescript-node-api

This project was created for [react-typescript-checkout](https://github.com/govindamandal/react-typescript-checkout/) to as backend APIs

## Available Scripts

In the project directory, you can run:

### `npm install` OR `yarn install`

### `npm start || npm satart:dev` OR `yarn start || yarn satart:dev`

Runs the app in the development mode.\
Open [http://localhost:3070](http://localhost:3070) to access the APIs.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Build for the production

### `npm run build` OR `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

# Endpoints

### 1. GET`/api/items`

This endpoint will return the list of products

### 2. POST `/api/item`

This endpoint will add a product

Parameters -

`{ title: string, description: string, price: number, image: string, }`

### 3. GET `/api/coupons`

This endpoint will return list of coupons

### 4. POST `/api/coupon`

This endpoint will add a coupon

Parameters -

`{ title: string, code: string, type: string, applyOn: string, minQty: number, minOrder: number, value: number }`

### 5. GET `/api/orders`

This endpoint will return list of orders

### 6. POST `/api/order`

This endpoint will add an order

Parameters -

`{ name: string, email: string, data: Object }`
