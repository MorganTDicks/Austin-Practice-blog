// Displays a summary of the user 
// Scope: Dashboard. 
import styles from '../../styles/components/usersummary.module.css';
import { User } from "@/Declarations/UserTypes";

export default function UserSummary(props: any){
    let currentUser: User = props.currentUser;

    let userImage = `/${currentUser.id}/profile.jpg`;
    // TODO: If image does not exist, display generic image
        
    return(
        <>
            <table className={styles.tablestuff}>
                <tbody>
                    <tr>
                    <td className={styles.imagetable}>
                        <img src={userImage} alt="profile" className={styles.imagestuffs}/>
                    </td>
                    <td className={styles.infostuffs}>
                        <p> Username: {currentUser.username} </p>
                        <hr/>
                        <p> {currentUser.name} {currentUser.surname} </p>
                    </td>
                    </tr>
                </tbody> 
            </table>        
        </>
    )
}