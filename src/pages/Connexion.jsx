import React, { useState } from 'react'

import Header from '../components/Header'

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
                                    <div className="mb-4">
                                        <label className="form-label">Nom d'utilisateur</label>
                                        <input  type="text" className="form-control" 
                                                value={username} 
                                                onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Mot de passe</label>
                                        <input type="password" className="form-control"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <button className="btn btn-primary w-100 py-8 mb-4 rounded-2" type='submit'>Lancer l'analyse</button>
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