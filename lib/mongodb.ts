import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Missing MONGODB_URI environment variable.");
}

type GlobalMongo = typeof globalThis & {
  _lssMongoClientPromise?: Promise<MongoClient>;
};

const globalMongo = globalThis as GlobalMongo;

const client = new MongoClient(uri);

export const mongoClientPromise =
  globalMongo._lssMongoClientPromise ?? client.connect();

if (process.env.NODE_ENV !== "production") {
  globalMongo._lssMongoClientPromise = mongoClientPromise;
}
