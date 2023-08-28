import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Rodape from './components/Rodape';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#87c278',
      corSecundaria: '#d9f7e9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8',
    },
    {
      nome: 'Ux e Design',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf',
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores( [...colaboradores, colaborador] );
  };

  return (
    <div className='App'>
      <Banner />
      <Formulario nomeDosTimes={times.map(obj => obj.nome)} aoColaboradorCadastrado={pessoa => aoNovoColaboradorAdicionado(pessoa)} />

      {times.map((objTime) => <Time
          key={objTime.nome}
          nome={objTime.nome}
          corDestaque={objTime.corPrimaria}
          corFraca={objTime.corSecundaria}
          colaboradores={colaboradores.filter(obj => obj.time === objTime.nome)}
        />
      )}

      <Rodape />
    </div>
  );
}

export default App;