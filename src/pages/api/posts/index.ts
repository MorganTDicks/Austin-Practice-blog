// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type PostData = {
  name: string
  /* ... */
}

const dummyPosts = [
    { 
        name: 'John Doe' 
    }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostData[]>
) {
  res.status(200).json(dummyPosts);
}
