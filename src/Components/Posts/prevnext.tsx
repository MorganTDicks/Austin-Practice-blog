import Link from "next/link";
import { useRouter } from "next/router";
import styles from '../../styles/components/prevnext.module.css';

export default function PrevNext(props: any){
    let prevPost: Post = props.prevPost;
    let nextPost: Post = props.nextPost;
    
    let prevReturn: JSX.Element = <></>;
    let prevReturnTitle: JSX.Element = <></>;
    let nextReturn: JSX.Element = <></>;
    let nextReturnTitle: JSX.Element = <></>;

    if ((prevPost.id !== '')){ //This hasno problem with reading. 
        // prevReturn = (
        //     <Link href={`/Posts/${prevPost.id}`}> {prevPost.header} </Link>
        // )
        prevReturn = (
            <button onClick={showPrevPostHandler}> 
                <ul>
                    <li> Previous Post: </li>
                    <li className={styles.nameDisplay}> {prevPost.header} </li>
                </ul>
            </button>
        )
    }

    if ((nextPost.id !== '')){ // This has a problem reading when it reaches end of array. 
        // nextReturn = (
        //     <Link href={`/Posts/${nextPost.id}`}> {nextPost.header} </Link>
        // )

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

    // return(
    //     <table> 
    //     <tr> 
    //         <td> Previous Post: </td> 
    //         <td> Next Post: </td> 
    //     </tr> 
    //     <tr>
    //         <td> {prevReturn} </td>
    //         <td> {nextReturn} </td>
    //     </tr>
    // </table>
    // );
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