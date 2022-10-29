
import { Itarefa, props } from '..'
import  style from '../lista.module.scss'

                   // extendes basicamente extende o que tem em itarefas para a interface props
interface Props extends Itarefa {
    selecionarTarefa: (tarefaSelecionada: Itarefa) => void
}
                                  // aqui definimos o nome do props
  function Item ({tarefa, tempo, completo, selecionado, id, selecionarTarefa }:Props){
    return(                                            // e a qui definimos o tipo do props
        <li className={`${style.item} ${selecionado ? style.itemSelecionado: ""} ${completo ? style.itemCompletado: ""}`}  onClick={ () =>!completo && selecionarTarefa({tarefa, tempo, completo, selecionado,id}
            
        
        )} >
                        <h3>{tarefa}</h3>
                        <span>{tempo}</span>
                    </li>
    )
}


export default Item