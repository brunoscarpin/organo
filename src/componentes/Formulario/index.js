import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome, cargo, imagem, time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}> 
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    label='Nome' 
                    obrigatorio={true} 
                    placeholder='Digite o seu nome'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}    
                />
                <CampoTexto 
                    label='Cargo' 
                    obrigatorio={true} 
                    placeholder='Digite o seu cargo' 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}    
                />
                <CampoTexto 
                    label='Imagem' 
                    placeholder='Digite o endereço da imagem' 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}    
                />
                <ListaSuspensa 
                    label='Time' 
                    obrigatorio={true} 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario