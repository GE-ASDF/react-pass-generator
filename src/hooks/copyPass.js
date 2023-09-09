import { useState } from "react";

function setText(){
    return 'Copiar'
}

export default function copyPass(){
  const [buttonText, setButtonText] = useState(() => {return setText()});
  const setCopyText = (pass)=>{
        if(!pass){
            return;
        }
        try {
            navigator.clipboard.writeText(pass);
            setButtonText('Copiado')         
        } catch (err) {
            console.log('Falha ao copiar o texto', err);
        }
            
    }

    return {buttonText, setCopyText, setButtonText};
}