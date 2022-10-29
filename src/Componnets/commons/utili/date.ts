 export function tempoemSegundos(tempo: string){
    const [horas = 0, minutos= 0, segundos = 0] = tempo.split(":") // o typescript é inteligente o suficinte pra entender que no split o tempo passado no parametro se refere as 3 constantes criadas

    const horasemSegundos = Number(horas) * 3600
    const minutosemSegundos =Number(minutos) *60
    return horasemSegundos + minutosemSegundos + Number(segundos)

}