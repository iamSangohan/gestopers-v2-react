import React from 'react'

function InputField({ label, type, value, onChange }) {
    return (
        <div className="mb-4">
            <label className="form-label">{label}</label>
            <input 
                type={type} 
                className="form-control" 
                value={value} 
                onChange={onChange} 
            />
        </div>
    );
}


export default InputField