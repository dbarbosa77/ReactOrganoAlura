import Item from '../Item'
import './Time.css'


const Time = (props) =>{
    return (
        (props.itens.length > 0) ? <section className='time' style={{ backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='itens'>
                {props.itens.map(item => <Item 
                corFundo={props.corPrimaria}
                key={item.nome}
                nome={item.nome} 
                cargo={item.cargo}
                imagem={item.imagem}></Item>)}
            </div>
        </section>
        : ''
    )

}

export default Time