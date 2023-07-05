import Link from "next/link";
import styles from '@/styles/components/posts.module.css';
import DataImporter from "@/Components/dataimporter";

// Component Imports
import TopBanner from "@/Components/banner/topbanner";
import NavBar from "@/Components/navbar/navbar";
import BottomBanner from "@/Components/banner/bottombanner";
import UserInfo from "@/Components/Posts/UserInfo";

export default function AllPosts(){
    // Importing the List of Posts from the object
    let arrPosts: Post[] = DataImporter.importPosts;

    // TODO: Order Posts by Most Recent Activity

    return(
        <div>
            <TopBanner pagename="All Posts"/>
            <NavBar/>
            <p> View All posts: </p>
            <p> Search and Filter </p> 
            <p> This give you an idea? Suggest a post! (On the right)</p>
            <br/><br/>
            <div className={styles.PostList}>
            <table className={styles.TableStuff}>
                {arrPosts.map((post) => {
                return( 
                    <tr className={styles.Posts} style={{['--mycolour' as any]: '#3e4660'}}>
                            <td className={styles.TableDatal}> 
                                <div className={styles.titleText}> 
                                    <Link href = {`../Posts/${post.id}`} > {post.header} </Link>
                                </div> 
                                {/* Link to topics page */}
                                <p> [{post.topic}] </p>
                            </td>
                            <td className={styles.TableData}> Post Image / Preview </td> 
                            <td className={styles.TableDatar}> 
                                <UserInfo postID={post}/>
                            </td>
                    </tr>
                    );
                })}
            </table>
            </div>
            <BottomBanner/>
        </div>
    )
}

