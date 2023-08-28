import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    const css = { backgroundColor: props.corFraca };

    return (
        props.colaboradores.length > 0 &&
        <section className='time' style={css}>
            <h3 style={{ borderColor: props.corDestaque }}>
                {props.nome}
            </h3>
            <div className='colaboradores'>
                {props.colaboradores.map(obj => <Colaborador corDeFundo={props.corDestaque} nome={obj.nome} cargo={obj.cargo} imagem={obj.imagem} key={obj.nome} />)}
            </div>
        </section>
    )
};

export default Time