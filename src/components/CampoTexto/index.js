import './CampoTexto.css';

const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...`;

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    };

    return (
        <div className="campoTexto">
            <label htmlFor={props.identificador}>
                {props.label}
            </label>
            <input id={props.identificador} value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificado}/>
        </div>
    )
};

export default CampoTexto