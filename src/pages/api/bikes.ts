import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getAllBikes } from "../../../lib/db";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === "GET") {
    const bikes = await getAllBikes();

    return res.status(200).json({
      data: bikes,
    });
  }

  return res.status(404).json({ message: "Not found" });

}