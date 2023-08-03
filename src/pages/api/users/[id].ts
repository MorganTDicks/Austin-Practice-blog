// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { UserData } from '@/Declarations/DBTypes';
import DataInitialiser from '@/Utilities/dataiinitialiser';
import type { NextApiRequest, NextApiResponse } from 'next'

// TODO: Replace dummy with data fetched from db... once the db is up. 

let dummyUsers: UserData[] = [
  {
      userID: "AA000000",
      Username: "A_Acker", 
      Name: "Austin",
      Surname: "Ackermann", 
      Email: "austin@al.co.za",
      Password: "12341234",
      Level: 3
  },
  {
      userID: "AA000111",
      Username: "AusTwo", 
      Name: "Austin",
      Surname: "Ackermann", 
      Email: "austin@al.co.za",
      Password: "12341234",
      Level: 1
  },
  {
      userID: "PS004325",
      Username: "RandomJoe",
      Email: "randomjoe@gmail.com",
      Password: "56785678",
  },
  {
      userID: "MO321434",
      Username: "ModMan",
      Email: "modman@thecan.can",
      Password: "12341234",
      Level: 2
  }
]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<number>
) {
    try{
        const { id } = req.query;
        let foundUser: UserData = dummyUsers.find(u => u.userID === id) || DataInitialiser.initialUserData;
        let foundUserLevel: number = foundUser.Level || 0; 
        res.status(200).json(foundUserLevel);
        
      } catch(error: any){
        console.error(error.message);
        res.status(500).json(0);
      }
}

          // Old unused code. 
          // let result = await fetch(`http:\\localhost:3000/api/posts`);
          // console.log(result.json);
          // let dummyPosts = await result.json();
       
        //   let dummyPosts: PostData[] = [{ 
        //     postID: '', 
        //     Header: '',
        //     Body: '',
        //     Topic: '',
        //     PostDate: '', 
        //     Status: ''
        // }]
        //   fetch("/api/posts").then(async res => await res.json()).then((json: any) => {dummyPosts = json});
        