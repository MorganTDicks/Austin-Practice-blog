// Top Banner
// TODO: Add second parameter to change background image. The image is a CSS: background-image so will have to look it up. 
import Link from "next/link";
import styles from "../../styles/components/headerbanner.module.css";


/* receives the page header as a prop*/
const TopBanner = (props: any) =>{
    const pName = props.pagename;
    return(
        <div className={styles.bannerbacking}>
            <p className={styles.toolbarl}> <Link className={styles.lical} href="/"> Home </Link></p>
            <p className={styles.toolbarr}> <Link className={styles.licar} href="/settings"> User </Link></p>
            <div className={styles.bannermain}>
                <h1> {pName} </h1>
            </div>
        </div>
    )
}

export default TopBanner;