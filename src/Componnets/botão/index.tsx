import React from "react";  // o modulo precisa ser importado anteriormente 
import  style from './botão.module.scss'
                                        // nesse casor precistei fazer a tipagem do children para que funcionasse. 
class Botão extends React.Component<{ children: string, type?: "button" | "submit" | "reset" | undefined, onClick?:()=> void }>{
    render() {   
        const{type = "button", onClick} = this.props  // essa const foi criada para atribuir o button por default caso nao seja passado nada                                                  // toda classe react ao ser criada tem que obrigatoriamente ter um render que receberá um return
        return(
            
            <button onClick={onClick} type={type} className={style.botao}>{this.props.children}</button>
            
            
        )
    }
}



export default Botão // O COMPONENTE AO SER CRIADO DEVE SER EXPORTADO