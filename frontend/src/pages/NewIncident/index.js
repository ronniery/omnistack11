import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api'

import logoImg from '../../assets/logo.svg'
import './styles.css';

export default function NewIncident() {
    const history = useHistory()
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    async function handleNewInstance(e) {
        e.preventDefault();

        try {
            await api.post('/incidents', {
                title, description, value
            })

            const ongId = localStorage.getItem('ongId')

            if(ongId !== null) {
                history.push('/profile')
            } else {
                window.location.reload();
            }
        } catch(e) {
            alert('Erro ao cadastrar caso, tente novamente')
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewInstance}>
                    <input
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                        type="text"
                        placeholder="Título do caso" />
                    <textarea
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                        placeholder="Descrição" />
                    <input
                        onChange={e => setValue(e.target.value)}
                        value={value}
                        type="text"
                        placeholder="Valor em reais" />
                    <button className="button" type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}