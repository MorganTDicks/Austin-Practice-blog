import { useState } from "react";
import Link from "next/link";

import styles from "../../styles/components/postcarousel.module.css";
import DataImporter from "../dataimporter";

export default function PostCarousel(){
    let arrPosts = DataImporter.importPosts;
    const [currPost, setCurrPost] = useState<Post>(arrPosts[0]);
    
    const prev = () => {
        let postIndex = arrPosts.indexOf(currPost);
        if (postIndex > 0)
            setCurrPost(arrPosts[postIndex - 1]);
            // Reappear
            return;
        // Dissapear
    }

    const next = () => {
        let postIndex = arrPosts.indexOf(currPost);
        if (postIndex < (arrPosts.length-1))    
            setCurrPost(arrPosts[postIndex + 1]);
            //Set button to re-appear if currently dissapeared
            return;
        // Set button to dissapear
    }

    //  TODO: See DataiTools
    function previewContent(msg: string, numchar: number): string {
        return(`${msg.substring(0,numchar-3)}...`);
    }

    return(
        <div className={styles.sorroundstuff}>
            {/* <h1> {arrPosts.indexOf(currPost)} </h1> */}
            <table className={styles.uls}>
                <tr>
                <td className={styles.tablesides}> 
                    <button onClick={prev} className={styles.buttonstuff}>
                        {' < '} 
                    </button>
                </td> 
                <td className={styles.tablecontent}> 
                    <p className={styles.internalHeader}> {currPost.header} </p>
                    <table className={styles.internalTable}>
                        <tr> 
                            <td className={styles.datesuggester}> 
                                <p> 
                                    {/* TODO: Move fetchuser function in userinfo module to be publically accessible  */}
                                    By: {currPost.suggester}
                                </p>
                                <p> {currPost.postdate} </p>
                            </td>
                            <td className={styles.bodycontent}> 
                                {previewContent(currPost.body, 100)} 
                            </td>
                        </tr>
                        <tr> 
                        </tr>
                    </table>
                    <Link href= {`/Posts/${currPost.id}`} className={styles.linkstuff}> View This Post </Link>
                </td> 
                <td className={styles.tablesides}> 
                    <button onClick={next} className={styles.buttonstuff}>
                        {' > '} 
                    </button>
                </td>
                </tr> 
            </table>
        </div>
    )
}