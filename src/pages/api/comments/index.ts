// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { CommentsData } from '@/Declarations/DBTypes';
import type { NextApiRequest, NextApiResponse } from 'next'

let dummyComments: CommentsData[] = [
    {
        pID: 'my-first-project-car', 
        uID: "AA000000",
        ActivityDate: '2023-06-10',
        Body: `Update: Got a leak in the roof, Working on sealing it before the rainy season gets too bad. `,
        Likes: 3
    },
    {
        pID: 'my-first-project-car',
        uID: "AA000000",
        ActivityDate: '2023-07-04',
        Body: `Update: regarding that leak in the roof, sealed it but now it looks like it got rained on and started melting away. Will need to repaint it by the looks of it :/`,
        Likes: 1
    }
]


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CommentsData[]>
) {
  res.status(200).json(dummyComments);
}
