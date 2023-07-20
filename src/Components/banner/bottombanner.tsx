// Bottom Banner
import styles from "../../styles/components/footerbanner.module.css";

const BottomBanner = (props: any) =>{
    const pName = props.pagename;
    
    return(
        <div className={styles.bannerimg}>
            <h1> Footer Stuff </h1>
        </div>
    )
}

export default BottomBanner;