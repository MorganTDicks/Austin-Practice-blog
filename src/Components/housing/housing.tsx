import styles from '../../styles/components/housing.module.css';

import TopBanner from "../banner/topbanner";
import NavBar from "../navbar/navbar";
import BottomBanner from "../banner/bottombanner";

export default function Housing(props:any){
    return(
        <>
            <TopBanner pagename={props.pagename}/>
            <NavBar/>
            <div className={styles.defaultStuffs}>
                {props.children}
            </div>
            <BottomBanner/>
        </>
    );
}