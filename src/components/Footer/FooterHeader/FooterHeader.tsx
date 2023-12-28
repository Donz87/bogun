import styles from './FooterHeader.module.css'
import { Link } from 'react-router-dom'
import des from '../../../assets/logo-des.png'

export const FooterHeader = () => {
    const date = new Date().getFullYear();
    const privacy = `${date}© | privacy note`;
    return (
        <div className={styles.container}>
            <div className={styles.image_wrapper}>
                <img src={des} alt="BOGUNARMOR" className={styles.logo}/>
            </div>
           
            <Link to="/">{privacy}</Link>
        </div>
    )
}