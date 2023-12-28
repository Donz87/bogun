import styles from './Footer.module.css'
import { FooterContact } from './FooterContact/FooterContact'
import { FooterHeader } from './FooterHeader/FooterHeader'
import { FooterSocial } from './FooterSocial/FooterSocial'
import { Newsletter } from './Newsletter/Newsletter'

export const Footer = () => {
    return (
        <footer>
            <div className={styles.wrapper}>
                <FooterHeader/>
                <div className={styles.content}>
                    <FooterContact/>
                    <Newsletter/>
                </div>
                <div className={styles.misc}>
                    <div className={styles.block}></div>
                    <FooterSocial/>
                </div>
            </div>
        </footer>
    )
}