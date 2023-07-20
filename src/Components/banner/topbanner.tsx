// Top Banner
// TODO: Add second parameter to change background image. The image is a CSS: background-image so will have to look it up. 
import Link from "next/link";
import styles from "../../styles/components/headerbanner.module.css";
import CheckLogin from "../account/checkLogin";
import ToolBar from "../bars/toolbar";

interface TopBannerProps {
    backgroundpath?: string,
    pagename?: string
};


/* receives the page header as a prop*/
const TopBanner = ({backgroundpath = '/Banner.jpg', pagename=''}: TopBannerProps) =>{
    const pName = pagename;

    return(
        <div className={styles.bannerbacking} style={{backgroundImage: `url(${backgroundpath})`}}>
            <ToolBar/>
            
            <div className={styles.bannermain}>
                <h1> {pName} </h1>
            </div>
        </div>
    )
}

export default TopBanner;