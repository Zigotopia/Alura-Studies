import React from "react";
import Botão from "../botão";
import style from "./formulario.module.scss";
import {v4 as uuidv4} from "uuid" // é um modulo que nos permite gerar um id aleatório
import { Itarefa } from "../Lista";

class Formulario extends React.Component<{      //type retirado la do set
  setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}> {
 
 
  state = {
    tarefa: "",
    tempo: "00:00:00",
  };      //  o class component é statefull ou seja , eu não preciso definir o setstate antes para que ele funcione. eu só preciso criar um State e altera-lo com o set state

  salvarTarefa(evento:React.FormEvent){
    evento.preventDefault()
    this.props.setTarefas(tarefasAntigas => [...tarefasAntigas , {...this.state , completo:false, selecionado:false, id:uuidv4()}])
                            //o set tarefas sabe que o promeiro parametro é o array antigo
      this.setState({
        tarefa:"",
        tempo: "00:00:00"
      })  // essse estate foi criado para que o form seja resetado após salvar a tarefa                    

  }
  render() {
    return (                                              //crei a função logo acima para criar um comportamento para a submissão do formukario . O bind aqui foi utilizado para ligar o this ao escopo de salvarTarefa
      <form className={style.novaTarefa} onSubmit={this.salvarTarefa.bind(this)} > 
        <div className={style.inputContainer}>                     
          <label htmlFor="tarefa"> Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.tarefa}
            onChange={ evento => this.setState({...this.state, tarefa:evento.target.value})
            }
            placeholder=" O que voce quer estudar ?"
            required
          />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="tempo"></label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.tempo}
            onChange={evento => this.setState({...this.state, tempo:evento.target.value})}
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>

        <Botão type="submit">Adicionar</Botão>
      </form>
    );
  }
}

export default Formulario;
