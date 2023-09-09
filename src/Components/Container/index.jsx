import style from "./style.module.css";
export default function Container(props){
    return (
        <section 
        className={`${props.className ? props.className:''} `} 
        {...props}
        >
            {props.children}
        </section>
    )    
}