import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CampoTexto';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape'

function App() {

const times = [
  {
    nome: 'Atendimento',
    corPrimaria: '#57C278',
    corSecundaria: '#D9F7E9'
  },
  {
    nome: 'Back Office',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF'
  },
  {
    nome: 'Tecnologia',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2'
  },
  {
    nome: 'Gerencia',
    corPrimaria: '#D86E8F',
    corSecundaria: '#FAE9F5'
  },
]



const [itens, setItens] = useState([])

const aoNovoItemAdd = (item) =>{
  debugger
  setItens([...itens, item])
}


  return (
    <div className="App">
      <Banner></Banner>
      <Formulario times={times.map(x => x.nome)} aoItemCadastrado={item => aoNovoItemAdd(item)}></Formulario>

      {times.map(time => <Time
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      itens={itens.filter(x => x.time === time.nome)}
      ></Time>)}

      <Rodape></Rodape>
    </div>
  );
}

export default App;
