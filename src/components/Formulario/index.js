import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();

        props.aoColaboradorCadastrado(
            {
                nome: nome,
                cargo: cargo,
                imagem: imagem,
                time: time
            }
        );
        
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    };

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar} id='formulario'>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    identificador = {1} 
                    obrigatorio = {true} 
                    label = 'Nome' 
                    placeholder = 'Digite seu nome'
                    valor = {nome}
                    aoAlterado = {novoValor => setNome(novoValor)}
                />
                <CampoTexto
                    identificador = {2}
                    obrigatorio = {true} 
                    label ='Cargo' 
                    placeholder ='Digite seu cargo' 
                    valor = {cargo}
                    aoAlterado ={novoValor => setCargo(novoValor)}
                />
                <CampoTexto
                    identificador = {3}
                    obrigatorio = {true} 
                    label = 'Imagem' 
                    placeholder = 'Informe o endereço da imagem' 
                    valor = {imagem}
                    aoAlterado = {novoValor => setImagem(novoValor)}
                />
                <ListaSuspensa
                    identificador = {4}
                    obrigatorio = {true} 
                    label = 'Time' 
                    itens = {props.nomeDosTimes}
                    valor = {time}
                    aoAlterado = {novoValor => setTime(novoValor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
};

export default Formulario