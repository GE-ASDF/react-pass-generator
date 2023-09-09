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

function getPass(){
    let pass = ''
    let maxSize = 10;
    for(let i=0;i <= maxSize;i++){
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        pass += caracteres[randomIndex];
    }        
    
    return pass;
}

export default function generatePass(){
    const [pass, setPass] = useState();
    const setPassGenerated = ()=>{
        setPass(()=>getPass())
    }
    return {pass, setPassGenerated};
}