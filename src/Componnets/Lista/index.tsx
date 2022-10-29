
import Item from "./item";
import style from './lista.module.scss'

 export interface Itarefa {
    tarefa:string,
    tempo :string,
    completo: boolean,
    selecionado: boolean,
    id : string
}

export interface props {
    tarefas: Itarefa[]
    selecionarTarefa: (tarefaSelecionada: Itarefa) => void           // para tipar uma função botamos o parametro que ela vair receber junto com o tipo e o que ela vai retornar
}

function Lista({tarefas, selecionarTarefa} :props) {        
    return (
        <aside className={style.listaTarefas}>
            <h2 >Estudos do Dia</h2>


            <ul>
                {tarefas.map((item, index) => (
                    <Item  
                        key={index}
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                        completo={item.completo}
                        selecionado={item.selecionado}
                        id={item.id}
                        selecionarTarefa={selecionarTarefa} />         // o que fizemos aqui foi atribuir os valores de tarefas aos props
                ))}

            </ul>
        </aside>)
}


export default Lista


// toda vez que uamos que queremos usar um javascript dentro de um jsx usamos uma chaves e ai podemos comandos javascript