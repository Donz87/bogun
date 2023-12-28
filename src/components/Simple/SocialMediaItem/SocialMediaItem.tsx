import React from "react"
import {RiTelegramFill as Telegram, RiTwitterXLine as Twitter, RiFacebookFill as Facebook, RiInstagramFill as Instagram} from 'react-icons/ri'


interface ISocialMedia {
    icon: string;
    link: string;
    styles: Record<string, string>
}
const SocialMediaItem:React.FC<ISocialMedia> = ({icon, link, styles}) => {
    return (
        <a href={link} target="_blank" className={styles.item}>
         {
         icon === 'facebook' ? <Facebook /> : 
         (icon === 'instagram' ? <Instagram /> :
         (icon === 'telegram' ? <Telegram /> :
         (icon === 'twitter' ? <Twitter /> : null)))
         }
        </a>
    )
}
export {SocialMediaItem}