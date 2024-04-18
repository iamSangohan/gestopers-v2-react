import React, { useState } from 'react'

import Header from '../components/Header'
import InputField from '../components/InputField'
import FormSubmitButton from '../components/FormSubmitButton'

import "./../styles/index.css"
import { useNavigate } from 'react-router-dom'


function Connexion() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        // Vérifier les identifiants
        if (username !== 'admin' || password !== 'admin') {
            alert('Nom d\'utilisateur ou mot de passe incorrect')
            return
        } else {
            // Stocker les identifiants dans le localStorage
            localStorage.setItem('isConnected', true)

            // Diriger vers la page Dashboard
            navigate('/dashboard', { replace: true })
        }
    }

    return (
        <>
            <Header />

            <div className='container'>
                <h1 className='pt-5'>Connexion</h1>

                <div className="row justify-content-center mt-5">
                    <div className="col-md-6">
                        <div className="card w-100">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <InputField 
                                        label="Nom d'utilisateur" 
                                        type="text" 
                                        value={username} 
                                        onChange={(e) => setUsername(e.target.value)} 
                                    />
                                    <InputField 
                                        label="Mot de passe" 
                                        type="password" 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)} 
                                    />
                                    <FormSubmitButton>Lancer l'analyse</FormSubmitButton>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Connexion