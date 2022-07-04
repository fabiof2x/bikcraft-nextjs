import { prisma } from "../../../lib/prisma";
import { addDoc, collection } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../services/firebase";

type Inputs = {
  name: string,
  areaCode: string,
  phone: string,
  email: string,
  message: string,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const contactData: Inputs = req.body;

    const contactMessage: Inputs = await prisma.contact.create({
      data: {
        name: contactData.name,
        areaCode: contactData.areaCode,
        phone: contactData.phone,
        email: contactData.email,
        message: contactData.message,
      },
    })

    return res.status(200).json({ data: contactMessage })
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method not allowed')
    console.log(req.body)
  }
}