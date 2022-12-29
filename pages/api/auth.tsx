import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log(req.method);
  const { name, pass } = req.body;
  console.log(name, pass);
  if (!name || !pass) {
    res.status(422).json({ message: "Invalid Data" });
    return;
  } else {
    res.redirect("/next");
  }
}

export default handler;
