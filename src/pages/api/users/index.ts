// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { UserData } from '@/Declarations/DBTypes';
import type { NextApiRequest, NextApiResponse } from 'next'

let dummyUsers: UserData[] = [
    {
        userID: "AA000000",
        Username: "A_Acker", 
        Name: "Austin",
        Surname: "Ackermann", 
        Email: "austin@al.co.za",
        Password: "1234",
        Level: 3
    },
    {
        userID: "AA000111",
        Username: "AusTwo", 
        Name: "Austin",
        Surname: "Ackermann", 
        Email: "austin@al.co.za",
        Password: "1234",
        Level: 1
    },
    {
        userID: "PS004325",
        Username: "RandomJoe",
        Email: "randomjoe@gmail.com",
        Password: "5678",
    },
    {
        userID: "MO321434",
        Username: "ModMan",
        Email: "modman@thecan.can",
        Password: "1234",
        Level: 2
    }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserData[]>
) {
  res.status(200).json(dummyUsers);
}
