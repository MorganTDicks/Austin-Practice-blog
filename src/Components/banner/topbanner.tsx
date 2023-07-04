// Top Banner
// TODO: Add second parameter to change background image. The image is a CSS: background-image so will have to look it up. 
import Link from "next/link";
import styles from "../../styles/components/headerbanner.module.css";


/* receives the page header as a prop*/
const TopBanner = (props: any) =>{
    const pName = props.pagename;
    return(
        <div className={styles.bannerimg}>
            <h1> {pName} </h1>
        </div>
    )
}

export default TopBanner;