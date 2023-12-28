import styles from './Banner.module.css'
import des from '../../../assets/banner-des.png'
import mob from '../../../assets/banner-mob.png'

import { useMatchMedia } from '../../../core/hooks/useMatchMedia'
import { Button } from '../../../components/UI/Button/Button'

export const Banner = () => {
    const {isDesktop} = useMatchMedia();
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <img src={isDesktop ? des : mob} alt="Bogun"  className={styles.banner}/>
                <Button type='button' name='Get in touch' styles={styles}/>
            </div>
        </section>
    )
}