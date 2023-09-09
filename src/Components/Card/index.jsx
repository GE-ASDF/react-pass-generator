import style from "./style.module.css";
export default function Card(props){
    return (
        <div 
            className={`${props.className ? props.className:''} ${style.card}`}
            {...props}
        >   
        {props.children}
        </div>
    )
}