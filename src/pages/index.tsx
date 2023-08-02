// Landing Page

import Link from "next/link";
import styles from '../styles/components/homepage.module.css';

// Component Imports
import MainLayout from "@/Layouts/mainlayout/mainlayout";
import PostCarousel from "@/Components/Posts/postcarousel";

export default function Home(){
  
  return(
      <>
      <MainLayout pagename="Home">

        {/* Header */}
        <div className={styles.headerstuff}> 
          <h1 className={styles.headertext}> Welcome Home </h1>
        </div>
        <br/> <br/>
        <div className={styles.homepage}>
            <p className={styles.homepageDialogue}> 
              Why don't you kick back, get yourself a cup of tea (or whatever you fancy) and put on some smooth 
              tunes as you experience some adventures with me, 
            </p>
            <p>
              whad'ya say? 
            </p> 
            <br/> <br/>
        </div>

        {/* Posts */}
        <div className={styles.headerstuff}> 
          <p className={styles.headertext}> Recent Posts </p>
        </div>
        <br/>
        <PostCarousel/>
        <div className={styles.homepage}>
          <p> <Link href="/Posts" className={styles.linkstuff}>See all posts</Link> </p>
          <p> Or do these give you an idea? If so, <Link href="/newpost" className={styles.linkstuff}>suggest a post</Link>!</p>
          <br/> <br/>
        </div>

        {/* About Preview */}
        <div className={styles.headerstuff}> 
          <p className={styles.headertext}> But Why? </p>
        </div>
        <br/> <br/>
        <div className={styles.homepage}>
          <p className={styles.homepageDialogue}> 
            I believe that everyone has droves of stories, but it can sometimes be hard to tell them with the perfect delivery. 
            That's why I would love to hear your stories as well, so feel free 
            to <Link href="/newpost" className={styles.linkstuff}>suggest a post</Link> and I will 
            help you as I can on gathering your most powerful delivery for those you want to hear it. 
          </p> 
          <br/> <br/>
          <p className={styles.homepageDialogue}> 
            Or, if you you can relate to whatever it is you might be reading here, feel free to leave a comment
            on one of the <Link href="/Posts" className={styles.linkstuff}>other posts</Link> as you go by, 
            or <Link href="/Posts/new-Post" className={styles.linkstuff}>suggest a post of your own</Link>.
          </p>
          <br/>
          <p> 
            Want to know even more <Link href="/aboutme" className={styles.linkstuff}> about me</Link> or <Link href="/aboutblog" className={styles.linkstuff}>about my blog</Link>? </p> 
          <p> Click the relevant links to find out! </p>
        </div>
        <br/><br/>
      </MainLayout>
      </>
  );
};