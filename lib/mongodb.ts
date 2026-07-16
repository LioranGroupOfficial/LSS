import { MongoClient } from "mongodb";

type GlobalMongo = typeof globalThis & {
  _lssMongoClientPromise?: Promise<MongoClient>;
};

const globalMongo = globalThis as GlobalMongo;

export function getMongoClientPromise() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("Missing MONGODB_URI environment variable.");
  }

  if (!globalMongo._lssMongoClientPromise) {
    const client = new MongoClient(uri);
    globalMongo._lssMongoClientPromise = client.connect();
  }

  return globalMongo._lssMongoClientPromise;
}
