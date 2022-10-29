import style from './relogio.module.scss'

interface props {
    tempo: number | undefined
}

export default function Relogio({tempo = 0} :props){
   
    const minutos = Math.floor(tempo / 60);
    const minutoDezena = Math.floor(minutos / 10);
    const minutoUnidade = minutos % 10;

    const segundos = tempo % 60;
    const segundosDezena = Math.floor(segundos / 10);
    const segundosUnidade = segundos % 10;
    return(
        <>
        <span className={style.relogioNumero}>{minutoDezena}</span>
        <span className={style.relogioNumero}>{minutoUnidade}</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>{segundosDezena}</span>
        <span className={style.relogioNumero}>{segundosUnidade}</span>
        </>

         // essa é a  forma de burlar o fato que o jxs precisa de um elemento pai pra mais de um elemento ou podemeos usar um react.fragment
        
        


    )
}





// Como o jsx é inspuridado no xml é sempre necessario que tenha um elemento pai.