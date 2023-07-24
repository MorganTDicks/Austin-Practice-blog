import styles from '../../styles/components/prevnext.module.css';
import { useRouter } from "next/router";
import type { Post } from "@/Declarations/PostTypes";

export default function PrevNext(props: any){
    let prevPost: Post = props.prevPost;
    let nextPost: Post = props.nextPost;
    
    let prevReturn: JSX.Element = <></>;
    let nextReturn: JSX.Element = <></>;

    if ((prevPost.id !== '')){
        prevReturn = (
            <button onClick={showPrevPostHandler}> 
                <ul>
                    <li> Previous Post: </li>
                    <li className={styles.nameDisplay}> {prevPost.header} </li>
                </ul>
            </button>
        )
    }

    if ((nextPost.id !== '')){
        nextReturn = (
            <button onClick={showNextPostHandler}> 
                <ul>
                    <li> Next Post: </li>
                    <li className={styles.nameDisplay}> {nextPost.header} </li>
                </ul>
            </button>
        )
    }

    const router = useRouter();
    
    function showPrevPostHandler(){
        router.push(`/Posts/${prevPost.id}`);
    }

    function showNextPostHandler(){
        router.push(`/Posts/${nextPost.id}`);
    }

    return(
        <ul className={styles.ulStuff}>
            <li className={styles.button} style={{['--displayDirection' as any]: 'left'}}>
                    {prevReturn}
            </li>
            <li className={styles.button} style={{['--displayDirection' as any]: 'right'}}>
                    {nextReturn}
            </li>
        </ul>
    )
}