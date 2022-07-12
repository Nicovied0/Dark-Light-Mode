import React from 'react'

const Form = ({submit}) => {
    return (
        <div className="main">
            <p className="sign" align="center">
                Registrarse
            </p>
            <form className="form1">
                <input className="username" type="email" placeholder="Email.." />
                <input className="password" type="password" placeholder="Password.." />
                <a className="submit" align="center" onClick={submit}>
                    Iniciar Sesión
                </a>
                <p className="forgot" align="center">
                </p>
            </form>
        </div>  
    )
}

export default Form