import React from 'react'

function FormSubmitButton({ children }) {
    return (
        <button className="btn btn-primary w-100 py-8 mb-4 rounded-2" type="submit">
            {children}
        </button>
    );
}

export default FormSubmitButton