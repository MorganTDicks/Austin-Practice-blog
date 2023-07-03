// Landing Page

// import React from "react";
import NavBar from "@/Components/navbar/navbar"; // Changed Components to components, updated the link. Ignore the error. 
import TopBanner from "@/Components/banner/topbanner";
import Link from "next/link";
// import styles from "../styles/globals.css"; -- Global CSS cannot be imported from files other than your Custom <App>. Due to the Global nature of stylesheets, and to avoid conflicts
import BottomBanner from "@/Components/banner/bottombanner";

export default function Home(){
  
  return(
      <div>
          <TopBanner pagename="Home"/>
          <NavBar/>
          <p> Home Page Welcome Back</p>
          <br/> <br/>
          {/* search for a post can be the same as the naming and categorising your post, maybe?  */}
          <p> Search for a Post </p> 
          <p> Latest 5 posts carousel </p>
          <p> See all posts (link) </p>
          <br/><br/>
          <BottomBanner/>
          <p> Useful Links </p>
      </div>
  );
};

/* TODO: Figure out how to run the app to test it. - Seems to be an issue with typescript, instructions not clear. 
  ran npm run dev, got a blank page. 
  # restarted the program
  ran 'npm start' got an error saying .next is empty, run next build
  ran next build, command not recodnised
  ran npm next build, next not recodnised
  ran npx next build, worked. installed build and built the project. 
  ran 'npm start' finished with an error that some dependancies are missing
  ran npx tsc --watch, found zero errors
  ran npx next build, > Export encountered errors on following paths:
        /
        /_error: /404
        /_error: /500
  ran npm start, encountered same error as last time: 
        type: 'Error',
        code: 'MODULE_NOT_FOUND',
        requireStack: [
          'C:\\Users\\User\\Projects\\austin-practice-blog\\node_modules\\next\\dist\\server\\next-server.js',
          'C:\\Users\\User\\Projects\\austin-practice-blog\\node_modules\\next\\dist\\server\\next.js',
          'C:\\Users\\User\\Projects\\austin-practice-blog\\node_modules\\next\\dist\\server\\lib\\render-server.js',
          'C:\\Users\\User\\Projects\\austin-practice-blog\\node_modules\\next\\dist\\compiled\\jest-worker\\processChild.js'
  - Not sure what to do next - 
  // FIXED: Use Src/ directory format for typescript. 

  2. create navigation bar component -3/6
  2.5 Find out how to use props with 

  3. apply basic styling to navbar - done
  4. find out how to apply global styling -- Done
  4.5 Find out how to do justified passing on navbar? 
  5. Commit basic page layout --Done

Expected home layout: 

Banner & Title
Nav bar (Home, Recent posts, +New Post+, About the site, Contact Support, Profile)
Welcome

Tools (Create, ...) 
Search
Topics & Featured posts (Most recent posts in each field)

Footer Banner
Useful Links and info



// Stuff that will bankrupt me
Adding a smooth collapsing animation to the header banner when user scrolls down
making 'show topics' and 'contact me' collapsable side bars instead of their own pages
Allowing each page to have its own banner image (dynamic css background images)
Making an image carousel for the recent posts section
Search comparing input to all existing posts as the user types. Search just takes in the theme and what they types, then returns it (as a prop for a master module, maybe?)
Allowing each post to have a unique banner, or just default if no banner is present. (Set default bannerpath and default topic)
Logging in and creating an account functionality

*/














// import Image from 'next/image'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//   return (
//     <main
//       className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
//     >
//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">src/pages/index.tsx</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Docs{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Learn{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Templates{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Discover and deploy boilerplate example Next.js&nbsp;projects.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Deploy{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }
