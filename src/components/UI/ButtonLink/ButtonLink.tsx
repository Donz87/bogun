
interface IBtnLink  {
    url: string;
    name: string;
    styles: Record<string, string>;
}
export const ButtonLink:React.FC<IBtnLink> = ({url, name, styles}) => {
    return (
        <a href={url} className={styles.btn}>{name}</a>
    )
}