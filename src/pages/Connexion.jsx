import React from 'react'

import Header from '../components/Header'

import "./../styles/index.css"


function Connexion() {
    return (
        <>
            <Header />

            <div className='container'>
                <h1 className='pt-5'>Connexion</h1>

                <div className="row justify-content-center mt-5">
                    <div className="col-md-6">
                        <div className="card w-100">
                            <div className="card-body">
                                <form>
                                    <div className="mb-4">
                                        <label className="form-label">Nom d'utilisateur</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Mots de passe</label>
                                        <input type="password" className="form-control" />
                                    </div>
                                    <button className="btn btn-primary w-100 py-8 mb-4 rounded-2">Lancer l'analyse</button>
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