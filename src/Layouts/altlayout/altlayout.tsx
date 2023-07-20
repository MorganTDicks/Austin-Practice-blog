import styles from '../../styles/components/housing.module.css';

import NavBar from "../../Components/bars/navbar";
import BottomBanner from "../../Components/banner/bottombanner";
import ToolBar from '@/Components/bars/toolbar';

export default function AltLayout(props:any){
    return(
        <>
            <ToolBar/>
            <NavBar/>
            <div className={styles.defaultStuffs}>
                {props.children}
            </div>
            <BottomBanner/>
        </>
    );
}