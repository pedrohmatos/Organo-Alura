import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return (
        <div className='listaSuspensa'>
            <label htmlFor={props.identificador}> {props.label} </label>
            <select id={props.identificador} onChange={(evento) => props.aoAlterado(evento.target.value)} required = {props.obrigatorio} value={props.valor} title='Selecione um time'>
                <option value={''}></option>

                {props.itens.map((item) => {
                    return <option key={item}>{item}</option>
                })}
                
            </select>
        </div>
    )
};

export default ListaSuspensa