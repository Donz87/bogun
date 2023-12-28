import { SocialMediaItem } from '../../Simple/SocialMediaItem/SocialMediaItem';
import styles from './FooterSocial.module.css'

type Ticon = 'facebook' | 'telegram' | 'twitter' | 'instagram';
interface Iitems {
    icon: Ticon;
    link: string;
}

export const FooterSocial = () => {
    const items: Iitems[] = [
        {icon: 'facebook', link: ''},
        {icon: 'twitter', link: ''},
        {icon: 'telegram', link: ''},
        {icon: 'instagram', link: ''},
    ];

    return (
        <div className={styles.container}>
           { items.map((item, index) => (
                <SocialMediaItem key={index} link={item.link} icon={item.icon} styles={styles}/>
            ))}
        </div>
    )
}