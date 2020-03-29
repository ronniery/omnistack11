import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import logoImg from '../../assets/logo.svg'
import './styles.css'

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsApp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory()

    async function handleRegister(e) {
        e.preventDefault();

        try {
            const response = await api
                .post('/ongs', {
                    name,
                    email,
                    whatsapp,
                    city,
                    uf
                })

            alert(`Seu ID de acesso: ${response.data.id}`)
            console.log(`Seu ID de acesso: ${response.data.id}`)

            history.push('/')
        } catch(err) {
            console.error(err)
        }
        
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/register">
                        <FiArrowLeft size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input
                        onChange={e => setName(e.target.value)}
                        value={name}
                        type="text"
                        placeholder="Nome da ONG" />
                    <input
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="E-mail" />
                    <input
                        onChange={e => setWhatsApp(e.target.value)}
                        value={whatsapp}
                        type="text"
                        placeholder="WhatsApp" />

                    <div className="input-group">
                        <input
                            onChange={e => setCity(e.target.value)}
                            value={city}
                            type="text"
                            placeholder="Cidade" />
                        <input
                            onChange={e => setUf(e.target.value)}
                            value={uf}
                            type="text"
                            placeholder="UF"
                            style={{ width: 80 }}
                            maxLength="2" />
                    </div>

                    <button className="button" type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}