// Navigation bar to go under the header
import Link from "next/link";
import styles from "../../styles/components/navbar.module.css";

const NavBar: React.FC = () =>{
    return(
        <>
            {/* --- Navigation Bar Content ---  */}
            <ul className={styles.ulc}>
                <li className={styles.licl}><Link className={styles.lical} href="/"> Show Topics </Link></li>
                <li className={styles.licl}><Link className={styles.lica} href="/"> Home </Link></li>
                <li className={styles.licl}><Link className={styles.lica} href="/"> All Posts </Link></li>
                <li className={styles.licl}><Link className={styles.lica} href="/newpost"> Suggest a Post </Link></li>
                <li className={styles.licr}><Link className={styles.licar} href="/"> Contact Me </Link></li>
                <li className={styles.licr}><Link className={styles.lica} href="/"> About Me </Link></li>
                <li className={styles.licr}><Link className={styles.lica} href="/"> About my Blog </Link></li>
            </ul>
        </>
    )
}

export default NavBar;