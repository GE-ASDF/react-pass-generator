import style from "./style.module.css";

export default function Title(props){
    return (
        <h1 className={`${props.className ? props.className:''} ${style.title}`} {...props}>{props.children}</h1>
    )
}