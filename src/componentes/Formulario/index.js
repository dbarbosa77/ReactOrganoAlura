import Botao from '../Botao'
import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import { useState } from 'react'

const Formulario = (props) => {



    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')



    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoItemCadastrado({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar um card</h2>
                <CampoTexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite seu nome"
                valor={nome}
                aoAlterado={valor => setNome(valor)}
                ></CampoTexto>

                <CampoTexto 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite seu cargo"
                valor={cargo}
                aoAlterado={valor=>setCargo(valor)}>
                </CampoTexto>

                <CampoTexto 
                label="Imagem" 
                placeholder="Digite o endereço da imagem"
                valor={imagem}
                aoAlterado={valor=>setImagem(valor)}>
                </CampoTexto>

                <ListaSuspensa 
                obrigatorio={true}
                label="Time" 
                itens={props.times}
                aoAlterado={valor=>setTime(valor)}>
                </ListaSuspensa>

                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )

}

export default Formulario