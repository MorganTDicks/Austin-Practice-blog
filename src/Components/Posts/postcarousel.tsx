import { useContext, useState } from "react";
import Link from "next/link";

import styles from "../../styles/components/postcarousel.module.css";
import type { Post } from "@/Declarations/PostTypes";
import { previewContent } from "../../Utilities/datatools/dataitools";
import postContext from "@/Context/datawrappers/postwrapper";

export default function PostCarousel(){
    let arrPosts = useContext(postContext).value;
    const [currPost, setCurrPost] = useState<Post>(arrPosts[0]); // This is running while context is still blank. Use promises and await to fix. 
    
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
        
        
    return(
        <div className={styles.sorroundstuff}>
            <table className={styles.uls}>
                <tbody>
                    <tr>

                        <td className={styles.tablesides}> 
                            <button onClick={prev} className={styles.buttonstuff}>
                                {' < '} 
                            </button>
                        </td> 
                        
                        <td className={styles.tablecontent}>     
                            <p className={styles.internalHeader}> {currPost.header} </p>
                            <table className={styles.internalTable}>
                                <tbody> 
                                    <tr> 
                                        <td className={styles.datesuggester}> 
                                            {currPost.suggester && <p> currPost.suggester.username </p>}
                                            <p> {currPost.postdate} </p>
                                        </td>
                                        <td className={styles.bodycontent}> 
                                            {previewContent(currPost.body, 100)} 
                                        </td>
                                    </tr>
                                    <tr> 
                                    </tr>
                                </tbody>
                            </table>
                            <Link href= {`/Posts/${currPost.id}`} className={styles.linkstuff}> View This Post </Link>
                        </td> 

                        <td className={styles.tablesides}> 
                            <button onClick={next} className={styles.buttonstuff}>
                                {' > '} 
                            </button>
                        </td>

                    </tr> 
                </tbody>
            </table>
        </div>
    )
}
