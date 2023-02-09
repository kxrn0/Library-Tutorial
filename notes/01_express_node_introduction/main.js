/*
 * Node is javaScript runtime environment meant to be run outside of the browser. Node is optimized for high throughput, so it's used on web apps
 * with a lot of I/O.
 * The HTTP module can be used to create a simple server, however in practice we use Node with external libraries, like express, since writting 
 * everything with native node modules can be too verbose and error prone.
 * The folder simple_http_server contains the code for a simple http server.
 *
 * Express is used to do what woule be too cumbersome in plain Vanilla Node. Some of the problems express solve are the following
 * 	1.- Decide what to do for each verb send to a given route.
 * 	2.- Make it easier to integrate templating engines.
 * 	3.- Set common web app settings.
 * 	4.- Add middleware to the request processing chain.
 * Express can be said to be very unopinionated.
 *
 * Express provides methods to specify what function to call for each HTTP verb and route.
 * The folder simple_express_website provides an example of simple usage of express.
 *
 * We can split code by using modules. We expose the code we want to export in a file as a module by making it a property of the module.exports object.
 * Callbacks are a popular way to make Node code asyncronous. Running code asyncronously in Node is necessary, since Node is a single threaded event driven 
 * execution environment, meaning that if a process takes too long to execute, it will block all other processes from running.
 *
 * Express provides methods for handling routes given different HTTP verbs. The most commonly used are get(), post(), delete(), and put().
 * It's often useful to separate route handling code under a common URL in a different file from other URLs. The way we do this is by using the express.Router
 * object. We add route handling functionality to an instance of that object the same way we would to an express app, and the way we include in our app is
 * by calling the app.use() method with the parent URL as the first parameter, and the router as the second.
 * The app.use() method is also used to include middleware. Middleware is used to do anything needed between the request/response cycle. It can modify the request
 * and response objects, and it can even end the cycle. Middleware functions must call its next() method to continue code execution, or else the server won't send
 * a response to the client. Middleware is called in the order it's declared. It has to be set up before routes are, or else route handlers won't have access to
 * middleware functionality.
 * Middleware can be set for all responses with app.use(), or for a single verb with the corresponding app.<verb>() method. The route for which the middleware is
 * called is the first parameter in both cases, while the middleware code is the second one. In the case of app.use(), the route is optional.
 *
 * Error handling is done with functions with four parameters, the last three being the ones expected in middleware functions, and the first one being the error.
 * These error handling functions must be called after all the app.use() calls, and after setting up all route handlers.
 *
 * We can use templating engines to generate HTML dinamically and send it to the client. To do this we first set up the "views", which is the directory where our 
 * templates will be, and then the view engine. Then, for a given path we specify which template document we want to use by telling the response to render a template
 * with a given file name. The folder template_example provides an example of this.
 * /
