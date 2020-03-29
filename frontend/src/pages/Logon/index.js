import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import './styles.css'

export default function Logon() {
    const [id, setId] = useState('')
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        
        try {
            const response = await api.post('/sessions', { id })

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name)

            history.push('/profile')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input
                        value={id}
                        onChange={e => setId(e.target.value)}
                        type="text"
                        placeholder="Sua ID" />
                    <button type="submit" className="button">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color={'#e02041'} />
                            Não tenho cadastro
                        </Link>
                </form>

            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    )
}