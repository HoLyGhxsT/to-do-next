// import type { NextApiRequest, NextApiResponse } from "next";
import connect from "../../../lib/mongodb";
import User from "../../../model/schema";

try {
  connect();
  console.log("connected on reg");
} catch (error) {
  console.log("error on reg.js");
}

export default async function handler(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.json({ status: "User Not Found" });
  } else {
    res.redirect("/home");
  }
}
