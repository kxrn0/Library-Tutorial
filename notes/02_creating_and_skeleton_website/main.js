/*
 * In this section we will explain how to connect mongoose to a mongo database, how to create a schema, how to create a model from that
 * schema, and how to make basic queries.
 */

/*
 * We will be working with MongoDB Atlas, which is a cloud hosted database. Working with a local instance of Mongo is not too different from
 * using Atlas. To connect to Atlas we just need to use the connect() method of the mongoose object, with the URL of the database as parameter.
 * In our case we will have to include the appropriate credentials in the URL. The code in the folder mongo_connect provides an example of this.
 *
 * In mongoose we use schemas to create models, schemas define the shape of the objects we will store in our database. Each model maps to a collection
 * in the databse. The simplest way to define a schema is by just defining the properties and their types.
 * If we want to enforce the existence of some property in every document in our database we can use a different syntax when declaring it in our schema.
 * For example in new Schema({ age: { require: true, type: number } }), age is required to have a value, otherwise an error will be thrown. We can use similar
 * syntax to have more control of the shape of our documents. For example, we can make a document have a default value if for some reason we don't receive 
 * one when the document is being created. This is how we would, for example, have a default date for all documents created from this schema
 * new Schema({ date: { type: Date, default: () => new Date() } }). There are many other ways we can enforce a document's structure, for example we can have
 * properties with a numeric type to be in a given range, or strings to have only a certain length.
 *
 * Once we have a schema, we can create our model with the mongoose.model() method. The first parameter of the method is a string representing the name of the
 * model, and the second parameter is the schema. Mongoose will create a collection with the first parameter to the model() method as the name of the collection, 
 * if there's not already one.
 * Sometimes we may need to do some processing to the values stored in documents, that's when we can use virtual properties to simplify our work. They are properties 
 * that are not persisted in the database, but that can be used to access the document's fields and process them, then we can access them like any other property.
 *
 * Once we have a model, we can start creating and saving documents to our collection with it. We can do it in two different ways. The first one is by creating an 
 * instance of our model with an object with the data expected from our schema as the constructor's parameter, and then call the save() method on the model's instance,
 * or we can call the model's create() static method, with an object with the expected data as the first parameter, and a callback as the second one. The callback has
 * two parameters, the first one is an error, if any occurred, and the second the model's instance.
 * When we have a model's instance we can access its properties with the dot notation, like with regulad POJOs, however changing these properties doesn't update them 
 * back in the database until we call its save() or update() methods.
 */
