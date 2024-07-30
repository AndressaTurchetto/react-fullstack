import './estilo.css';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
    return (
      <ul className='App-header'>
        { textoOpcoes.map( (texto) => (
          <li className='opcao'>
            <p>
              {texto}
            </p>
          </li>
        ))}
      </ul>
    )
}

export default OpcoesHeader