// Top Banner
// TODO: Add second parameter to change background image. The image is a CSS: background-image so will have to look it up. 
import Link from "next/link";
import styles from "../../styles/components/headerbanner.module.css";

interface TopBannerProps {
    backgroundpath?: string,
    pagename?: string
};


/* receives the page header as a prop*/
const TopBanner = ({backgroundpath = '/Banner.jpg', pagename=''}: TopBannerProps) =>{
    const pName = pagename;

    return(
        <div className={styles.bannerbacking} style={{backgroundImage: `url(${backgroundpath})`}}>
            <p className={styles.toolbar}> <Link className={styles.lica} 
                style={{position: 'fixed', ['--leftstyle' as any]: '0px', ['--rightstyle' as any]: '10px'}} href="/"> Home </Link></p>
            <p className={styles.toolbar}> <Link className={styles.lica} 
                style={{position: 'fixed', right: '0', ['--leftstyle' as any]: '10px', ['--rightstyle' as any]: '0px'}} href="/User"> User </Link></p>
            <div className={styles.bannermain}>
                <h1> {pName} </h1>
            </div>
        </div>
    )
}

export default TopBanner;