import Link from "next/link";
import styles from '@/styles/components/posts.module.css';
import DataImporter from "@/Components/dataimporter";

// Component Imports
import TopBanner from "@/Components/banner/topbanner";
import NavBar from "@/Components/navbar/navbar";
import BottomBanner from "@/Components/banner/bottombanner";

export default function AllPosts(){
    // Importing the List of Posts from the object
    let arrPosts = DataImporter();

    // TODO: Order Posts by Most Recent Activity

    return(
        <div>
            <TopBanner pagename="All Posts"/>
            <NavBar/>
            <p> View All posts: </p>
            <p> Search and Filter </p> 
            <p> This give you an idea? Suggest a post! (On the right)</p>
            <br/><br/>
            <ul className={styles.PostList}>
                {arrPosts.map((post) => {
                return(
                    <li className={styles.Posts}>
                        {/* make a table */}
                        <table className={styles.TableStuff}>
                            <tr>
                                <td> (Post Image) </td> 
                                <td> 
                                    <h1> Title: {post.header} </h1>
                                    <div className={styles.viewPost}> 
                                        <Link href = {`../Posts/${post.id}`} > View Post </Link>
                                    </div> 
                                </td>
                                <td> post Commenter info </td>
                            </tr>
                        </table>
                    </li>
                    );
                })}
            </ul>
            <BottomBanner/>
        </div>
    )
}