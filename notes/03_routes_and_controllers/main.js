/*
 * It is often useful to separate route handling code of different routes into different files. For this we can use the express.Router class, we can 
 * use an instance of this class to create a router for a particular route, then we import this router and set it up as middleware on our main app. 
 * The way we use the router in the main app is by calling the app's use() method with two parameters, the first the base URL as a string, and the second 
 * parameter being the router.
 */
