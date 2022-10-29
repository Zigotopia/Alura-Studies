import Botão from "../Componnets/botão";
import Relogio from "./Relogio";
import style from './cronometro.module.scss'
import { Itarefa } from "../Componnets/Lista";
import { useEffect, useState } from "react";
import { tempoemSegundos } from "../Componnets/commons/utili/date";

interface props {
  selecionado: Itarefa | undefined
  finalizarTarefa: ()=> void
}

export default function Cronômetro({selecionado, finalizarTarefa} : props){

   const [tempo ,setTempo] = useState<number>()

   useEffect(() => {
    if(selecionado?.tempo)
    setTempo(tempoemSegundos(selecionado?.tempo))}, [selecionado]) // o useeffct serve pra fazer a atualiação de um componente antes que ele chegue ao fim do seu ciclo de vida. O primeiro parametro é uma fumção e o segundo parametro é um array de dependencias(variaveis) que ele usa como base pra funcionar. Nesse caso aqui é o selecionado. Ou seja. sempre que mudar ele executa o primeiro parametro que é a função
    
    function regressiva(contador: number= 0 -1) {
      setTimeout(()=> {
        if (contador > 0) {
          setTempo(contador - 1)
          return regressiva(contador - 1) // ao retornar a regressiva eu executa a função até a condição dela deixar de ser valida
        }
        finalizarTarefa()
      },1000) // o timeout serve para repet ir uma função a cada milisegundos
    }

    return( 
    
      <div className={style.cronometro}>
        <p className={style.titulo}>Escolha um temporizador
       
        </p>

        <div className={style.relogioWrapper}>
            <Relogio tempo={tempo}/>

        </div>
        <Botão onClick = {() => regressiva(tempo)}>Começar</Botão>


      </div> 

      
      

    )
        
}