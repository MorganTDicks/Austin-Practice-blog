import styles from '../../styles/components/housing.module.css';

import TopBanner from "../../Components/banner/topbanner";
import NavBar from "../../Components/bars/navbar";
import BottomBanner from "../../Components/banner/bottombanner";

export default function MainLayout(props:any){
    return(
        <>
            <TopBanner pagename={props.pagename} backgroundpath={props.backgroundpath}/>
            <NavBar/>
            <div className={styles.defaultStuffs}>
                {props.children}
            </div>
            <BottomBanner/>
        </>
    );
}