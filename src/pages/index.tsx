// Landing Page

import Link from "next/link";

// Component Imports
import Housing from "@/Components/housing/housing";

export default function Home(){
  
  return(
      <div>
          <Housing pagename="Home">
            <h1> Welcome Home </h1>
            <br/> <br/>
            <p> 
              Why don't you kick back, get yourself a cup of tea (or whatever you fancy) and put on some smooth 
              tunes as you experience some adventures with me, whad'ya say? 
            </p>
            <br/>
            <p> 
              I believe that everyone has droves of stories, but it can sometimes be hard to tell them with the perfect delivery. 
              That's why I would love to hear your stories as well, so feel free to [suggest a post] and I will 
              help you as I can on gathering your most powerful delivery for those you want to hear it. 
            </p> 
            <br/>
            <p> 
              Or, if you you can relate to whatever it is you might be reading here, feel free to [leave a comment
              on one of the other posts] as you go by. 
            </p>
            <br/>
            {/* search for a post can be the same as the naming and categorising your post, maybe?  */}
            <p> Search for a Post </p> 
            <p> Latest 5 posts carousel </p>
            <p> See all posts (link) </p>
            <br/><br/>
          </Housing>
      </div>
  );
};