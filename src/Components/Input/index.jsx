import style from "./style.module.css"
export default function Input(props){
    return (
        <input {...props} className={`${props.className} ${style.formControl}`} />
    )

}