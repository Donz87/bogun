import { Button } from '../../UI/Button/Button'
import styles from './Newsletter.module.css'

export const Newsletter = () => {
    return (
        <div className={styles.container}>
            <h3>Subscribe to a newsletter</h3>
            <form action="" id={styles.newsletter}>
                <input type="email" name="email" id={styles.email}  placeholder='ENTER YOUR E-MAIL'/>
                <Button type='submit' name='subscribe' styles={styles}/>
            </form>
        </div>
    )
}