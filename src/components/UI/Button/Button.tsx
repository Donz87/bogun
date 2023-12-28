interface IBtn {
    name: string;
    styles: Record<string, string>;
    type : 'submit' | 'button';
}
export const Button:React.FC<IBtn> = ({type, name, styles}) => {
    return (
        <button  type={type} className={styles.btn}>{name}</button>
    )
}