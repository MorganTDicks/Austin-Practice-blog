import CheckLogin from "../account/checkLogin";
import styles from '../../styles/components/toolbar.module.css';
import Link from "next/link";

export default function ToolBar(){
    return(
        <>
            <p className={styles.toolbar}> <Link className={styles.lica} 
                style={{position: 'fixed', ['--leftstyle' as any]: '0px', ['--rightstyle' as any]: '10px'}} href="/"> Home </Link></p>
            
            <p className={styles.toolbar}>
                <CheckLogin href="/User" label="LgIn" className={styles.lica} 
                style={{position: 'fixed', right: '0', ['--leftstyle' as any]: '10px', ['--rightstyle' as any]: '0px'}}>
                    <Link href="/User" className={styles.lica}
                    style={{position: 'fixed', right: '0', ['--leftstyle' as any]: '10px', ['--rightstyle' as any]: '0px'}}> User </Link>
                </CheckLogin>
            </p>
        </>
    )
}