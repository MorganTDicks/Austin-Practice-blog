// Navigation bar to go under the header
import Link from "next/link";
import styles from "../../styles/components/navbar.module.css";
import CheckLogin from "../account/checkLogin";

const NavBar: React.FC = () =>{
    return(
        <>
            {/* --- Navigation Bar Content ---  */}
            <ul className={styles.ulc}>
                <li className={styles.licl}><Link className={styles.lica} href="/"> Show Topics </Link></li>
                <li className={styles.licl}><Link className={styles.lica} href="/Posts"> All Posts </Link></li>
                <li className={styles.licl}>
                    <CheckLogin label="Suggest a Post" className={styles.lica} redirectTo="/newpost">
                        <Link className={styles.lica} href="/newpost"> Suggest a Post </Link>
                    </CheckLogin>
                </li>
                <li className={styles.licr}><Link className={styles.lica} href="/contact"> Contact Me </Link></li>
                <li className={styles.licr}><Link className={styles.lica} href="/aboutme"> About Me </Link></li>
                <li className={styles.licr}><Link className={styles.lica} href="/aboutblog"> About my Blog </Link></li>
            </ul>
        </>
    )
}

export default NavBar;