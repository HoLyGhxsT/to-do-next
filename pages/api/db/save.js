// import type { NextApiRequest, NextApiResponse } from "next";
import connect from "../../../lib/mongodb";
// import User from "../../../model/schema";

try {
  connect();
  console.log("connected on save");
} catch (error) {
  console.log("error on save.js");
}

export default async function handler(req, res) {
  //   const { email, password } = req.body;
  //   const user = await User.findOne({ email, password });
  //   if (!user) {
  //     return res.json({ status: "User Not Found" });
  //   } else {
  //     res.redirect("/home");
  //   }
  console.log(req.body.note);
  const note = req.body.note;
  res.status(200).json({ status: `Success. ${note}` });
}
