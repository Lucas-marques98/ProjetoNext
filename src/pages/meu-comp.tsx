//Criando components // sempre usar letras maiúsculas para criar as funções e também na hora de usar os components

//Definindo as propriedades de um component
interface MensagemProps {
  mensagem: string;
  num: number
}


const Mensagem: React.FC<MensagemProps> = (props: MensagemProps) => {
  return(
    <div>
      {props.mensagem}
      {props.num}

    </div>
  )
}

//atribuindo um função anônima a uma constante...
const MeuComponente = () => {
  return(
    <div>
      <h1>
        <Mensagem mensagem="Mensagem de Teste!!! "  
        num={10 + 10}/>
        </h1>
    </div>
  )
}

export default MeuComponente;