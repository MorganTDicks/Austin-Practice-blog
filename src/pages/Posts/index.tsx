import Link from "next/link";
import styles from '@/styles/components/posts.module.css';

// Component Imports
import MainLayout from "@/Layouts/mainlayout/mainlayout";
import UserInfo from "@/Components/Posts/UserInfo";
// import SearchFilter from "@/Components/SearchFilter/searchfilter";
import type { Post } from "@/Declarations/PostTypes";
import { useContext } from "react";
import postContext from "@/Context/datawrappers/postwrapper";

export default function AllPosts(){
    // Importing the List of Posts from the object
    let contex = useContext(postContext);
    let arrPosts: Post[] = contex.value;

    // TODO: Order Posts by Most Recent Activity

    return(
        <div>
            <MainLayout backgroundpath = "/Item.jpg" pagename="All Posts">
            <p> View All posts: </p>
            {/* <SearchFilter /> */}
            <p> This give you an idea? Suggest a post! (On the right)</p>
            <br/><br/>
            <div className={styles.PostList}>
                <table className={styles.TableStuff}>
                    <tbody> 
                    {arrPosts.map((post) => {
                        return( 
                        <tr className={styles.Posts} style={{['--mycolour' as any]: '#3e4660'}} key={post.id}>
                            <td className={styles.TableDatal}> 
                                <div className={styles.titleText}> 
                                    <Link href = {`../Posts/${post.id}`} > {post.header} </Link>
                                </div> 
                                {/* Link to topics page */}
                                <p> [{post.topic}] </p>
                            </td>
                            <td className={styles.TableData}> Post Image / Preview </td> 
                            <td className={styles.TableDatar}> 
                                <UserInfo workingPost={post}/>
                            </td>
                        </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
            </MainLayout>
        </div>
    )
}

