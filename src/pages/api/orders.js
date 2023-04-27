import { MongoClient } from "mongodb";

export const addOrder = async (order) => {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const response = await client.db().collection("orders").insertOne(order);

  return response.insertedId;
};

export default async (req, res) => {
  if (req.method === "POST") {
    const insertedId = await addOrder(req.body);
    res.status(200).json(insertedId);
  }
};
