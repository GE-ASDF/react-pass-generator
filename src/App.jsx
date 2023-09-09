import { useState } from "react";
import generatePass from "./hooks/generatePass";
import style from "./styles/App.module.css";
import Container from "./Components/Container";
import Card from "./Components/Card";
import Title from "./Components/Title";
import Button from "./Components/Buttons";
import copyPass from "./hooks/copyPass";


export default function App(){
  const {pass, setPassGenerated} = generatePass();
  const {buttonText, setCopyText, setButtonText} = copyPass();  

  return (
    <Container className={style.container}>
      <Card>
      <Title>Gerador de senhas</Title>
        <div className={style.wrapperRow}>
          <Button onClick={() => {setPassGenerated(); setButtonText('Copiar')}} >Gerar</Button>
          <Button className={`${buttonText.toLowerCase().trim() == 'copiado' ? style.borderGreen:''}`} onClick={() => {setCopyText(pass)}} >{buttonText}</Button>
        </div>
        <div className={`${style.result}  ${pass ? style.show:style.hidden}`}>
            <Title className={style.showPass}>{pass}</Title>
        </div>
      </Card>
    </Container>
  )
}