const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const database = "e-comm";
const client = new MongoClient(url);

async function getData() {
  try {
    await client.connect();
    console.log("Connected to the database");

    const db = client.db(database);
    const collection = db.collection("products");

    const response = await collection.find().toArray();
    console.log(response);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    // Always close the client connection when done
    await client.close();
    console.log("Connection closed");
  }
}

getData();
