import React from 'react'
import Header from '../components/Header'

function Dashboard() {

    // Verifier si l'utilisateur est connecté
    if (!localStorage.getItem('isConnected')) {
        // Send message d'erreur 
        alert('Vous devez vous connecter pour accéder à cette page')
        window.location.href = '/login'
    }

    return (
        <>
            <Header />

            <div className='container'>
                Dashboard
            </div>
        </>
    )
}

export default Dashboard