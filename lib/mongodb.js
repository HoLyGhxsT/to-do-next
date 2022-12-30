import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const connection = {};

async function connect() {
  if (connection.isConnected) {
    console.log("Database Connected!");
    return;
  }
  const db = await mongoose.connect(process.env.DATABASE);

  connection.isConnected = db.connections[0].readyState;
}

export default connect;
