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
  try {
    // console.log(req.body);
    const user = await User.create(req.body);
    res.redirect("/home");
    if (!user) {
      return res.json({ code: "User not created" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ status: "Error creating user. or User already exist" });
  }
}
