import styles from './FooterContact.module.css'


export const FooterContact = () => {
    return (
        <div className={styles.container}>
            <h3>Contact us</h3>
            <div className={styles.wrapper}>
                <div>
                    <p>GENERAL QUESTIONS:</p>
                    <a href="mailto:PARTNERSHIP@BOGUN.GOV.UA">HELP@BOGUN.GOV.UA</a>
                </div>
                <div>
                    <p>FOR PRESS:</p>
                    <a href="mailto:PARTNERSHIP@BOGUN.GOV.UA">PRESS@BOGUN.GOV.UA</a>
                </div>               
                <div>
                    <p>FOR PARTNERSHIP:</p>
                    <a href="mailto:PARTNERSHIP@BOGUN.GOV.UA">PARTNERSHIP@BOGUN.GOV.UA</a>
                </div>
            </div>
        </div>
    )
}