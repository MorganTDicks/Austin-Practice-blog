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
            <p> Latest posts carousel </p>
            <p> See all posts (link) </p>
            <p> Or do these give you an idea? If so, suggest a post! (link)</p>
            <br/>
            <p> But Why? (insert buy why gif here maybe?) </p>
            <p> 
              I believe that everyone has droves of stories, but it can sometimes be hard to tell them with the perfect delivery. 
              That's why I would love to hear your stories as well, so feel free to [suggest a post] and I will 
              help you as I can on gathering your most powerful delivery for those you want to hear it. 
            </p> 
            <br/>
            <p> 
              Or, if you you can relate to whatever it is you might be reading here, feel free to [leave a comment
              on one of the other posts] as you go by, or [suggest a post of your own].
            </p>
            <br/>
            <p> Want to know even more [about me] or [about my blog]? Click the relevant links to find out! </p>
            <br/><br/>
          </Housing>
      </div>
  );
};