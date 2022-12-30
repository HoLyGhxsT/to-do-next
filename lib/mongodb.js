import mongoose from "mongoose";

const connection = {};

console.log(process.env.DATABASE)

async function connect() {
  if (connection.isConnected) {
    return;
  }
  const db = await mongoose.connect(process.env.DATABASE);

  connection.isConnected = db.connections[0].readyState;
}

export default connect;
