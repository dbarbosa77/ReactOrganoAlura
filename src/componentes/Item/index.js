import './Item.css'

const Item = (props) =>{

    return(<div className='item'>
        <div className='cabecalho' style={{backgroundColor: props.corFundo}}>
            <img src={props.imagem} alt={props.nome}></img>
        </div>
        <div className='rodape'>
            <h4>{props.nome}</h4>
            <h5>{props.cargo}</h5>
        </div>
    </div>)
}

export default Item