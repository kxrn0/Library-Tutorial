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
 * /
