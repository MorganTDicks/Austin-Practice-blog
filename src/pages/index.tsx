// Landing Page

import Link from "next/link";

// Component Imports
import NavBar from "@/Components/navbar/navbar";
import TopBanner from "@/Components/banner/topbanner";
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