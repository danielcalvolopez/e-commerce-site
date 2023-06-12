import { MongoClient } from "mongodb";

export const getData = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  const productsCollection = db.collection("products");

  const products = await productsCollection.find().toArray();

  client.close();

  return products;
};

const handler = async (res) => {
  const products = await getData();
  await res.status(201).json(products);
};

export default handler;
