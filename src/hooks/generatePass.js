import { useState } from "react";

const caracteres = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=',
    '[', ']', '{', '}', '|', '\\', ';', ':', "'", '"', ',', '.', '<', '>',
    '/', '?', '`', '~'
];

function getPass(passwordSize){
    let pass = ''
    let maxSize = passwordSize;
    if(passwordSize <= 100 && passwordSize > 1){
        for(let i=0;i < maxSize;i++){
            const randomIndex = Math.floor(Math.random() * caracteres.length);
            pass += caracteres[randomIndex];
        }        
    }else{
        return "O tamanho da senha deve estar entre 2 e 100 caracteres"
    }
    
    return pass;
}

export default function generatePass(){
    const [pass, setPass] = useState();
    const setPassGenerated = (passwordSize)=>{
        setPass(()=>getPass(passwordSize))
    }
    return {pass, setPassGenerated};
}