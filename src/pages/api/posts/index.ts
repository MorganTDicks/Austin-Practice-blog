// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PostData } from '@/Declarations/DBTypes';
import type { NextApiRequest, NextApiResponse } from 'next'

const dummyPosts: PostData[] = [
  {
    postID: 'hello-world', 
    //id: 1,
    Header: 'Hello World!',
    Body: `This is my first post, Hello World! 
    I would love for you guys to comment down below with some suggestions as to what to post next! I will have several topics in which I post, but if it doesn't quite fit in, suggest a new topic as well!`,
    Topic: 'Misc',
    PostDate: '2022-03-25',
    Suggester: 'AA000000',
    Status: 'approved'
  },
  {
    postID: 'my-first-project-car', 
    //id: 2,
    Header: 'My First Project Car',
    Body: `Ah Yes, my first project car. I remember it like it was yesterday... probably because it was.  
    I have this old RV i am working on. Got it from my grandfather. It was subject to a bit of neglect over the years, but now that i will have it in my name soon, it is up to me to fix it up. Post down below any tips or comments you may have, this will be quite the journey for all of us. `,
    Topic: 'Cars',
    PostDate: '2022-10-02',
    Suggester: 'AA000000',
    Status: 'approved'
  },
  {
    postID: 'getting-a-bike-drivers-worth-it', 
    //id: 3,
    Header: 'Getting a Bike Driver`s: Worth it?',
    Body: `After thinking i was finally done with the trudge of getting a driver's licence, it was now suggested to me that a Biker's licence is just as essential? I would love to hear your thoughts and experience on this. `,
    Topic: 'Cars',
    PostDate: '2021-12-05',
    Status: 'approved'
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostData[]>
) {
  res.status(200).json(dummyPosts);
}
