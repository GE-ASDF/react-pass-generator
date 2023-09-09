import { useState } from "react";
import generatePass from "./hooks/generatePass";
import style from "./styles/App.module.css";
import Container from "./Components/Container";
import Card from "./Components/Card";
import Title from "./Components/Title";
import Button from "./Components/Buttons";
import Input from "./Components/Input";
import copyPass from "./hooks/copyPass";


export default function App(){
  const {pass, setPassGenerated} = generatePass();
  const {buttonText, setCopyText, setButtonText} = copyPass();  
  const[passwordSize, setPasswordSize] = useState(10);

  return (
    <Container className={style.container}>
      <Card>
      <Title>Gerador de senhas</Title>
        <label htmlFor="passwordSize">Tamanho da senha:</label>
        <Input
         value={passwordSize}
         id='passwordSize' placeholder='Tamanho da senha' type='number' min={1}
         onChange={ (ev)=> setPasswordSize(ev.target.value) }
         />
        <div className={style.wrapperRow}>
          <Button onClick={() => {setPassGenerated(passwordSize); setButtonText('Copiar')}} >Senha de {passwordSize} caracteres</Button>
          <Button className={`${buttonText.toLowerCase().trim() == 'copiado' ? style.borderGreen:''}`} onClick={() => {setCopyText(pass)}} >{buttonText}</Button>
        </div>
        <div className={`${style.result}  ${pass ? style.show:style.hidden}`}>
            <Title className={`${style.showPass} ${style.break}`}>{pass}</Title>
        </div>
      </Card>
    </Container>
  )
}