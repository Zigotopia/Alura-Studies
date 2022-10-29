import React, { useState } from 'react';
import Formulario from '../Componnets/Formulário';
import Lista, { Itarefa } from '../Componnets/Lista';
import Cronômetro from '../Cronometro';
import style from './app.module.scss'



function App() {

  let [selecionado, setSelecionado] = useState<Itarefa>()

  const selecionarTarefa = (tarefaSelecionada: Itarefa) => {

    setSelecionado(tarefaSelecionada)
   setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({...tarefa, selecionado: tarefa.id=== selecionado?.id ? true :false})))
    
  }


  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores =>
        tarefasAnteriores.map(tarefa => {
          if (tarefa.id === selecionado?.id) {
            return {
              ...tarefa,
              selecionado: false,
              completo: true
            }
          }
          return tarefa;
        }))
    }
  }
   



  // set tarefas é o que vai avisar quando determinado coisa mudar
  // use state é basicamente o que precisa ser avisado
  let [tarefas, setTarefas] = useState<Itarefa[]|[] >([
  

  ])





  return (
    <div className= {style.AppStyle}>
     <Formulario setTarefas={setTarefas}/>
     <Lista tarefas={tarefas} selecionarTarefa={selecionarTarefa}/>
     <Cronômetro selecionado={selecionado} finalizarTarefa={finalizarTarefa}/>
    </div>
  );
}

export default App;
