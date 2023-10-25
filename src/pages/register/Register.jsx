import styles from "./Register.module.css"

import { useAuthentication } from "../../hooks/useAuthentication"

import { useEffect, useState } from "react"


const Register = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')
    const [ displayName, setDisplayName ] = useState('')
    const [ error, setError ] = useState('')

    const { createUser, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError('')

        const user = {
            displayName,
            email,
            password
        }

        if(confirmPassword !== password) {
            setError('As senhas precisam ser iguais!')
            return
        }

        const res = await createUser(user)

        console.log(res);
    }

    useEffect(() => {
        if(authError) {
            setError(authError)
        }
    }, [authError])

  return (
    <div className={styles.register}>
        <h1 className={styles.h1 }>Faça seu Cadrastro </h1>
        <p>Crie seu Úsuario e compartilhe suas histórias</p>

        <form  onSubmit={handleSubmit}>
            <label>
                <span>Nome: </span>
                <input 
                
                type="text" 
                name="name"
                required
                placeholder="Digite seu nome"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}

                />
            </label>
            <label>
                <span>Email: </span>
                <input 
                type="email" 
                name="email"
                required
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                <span>Senha: </span>
                <input 
                type="password" 
                name="password"
                required
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <label>
                <span>Confirmação de senha: </span>
                <input 
                type="password" 
                name="confirmPassword"
                required
                placeholder="Confirme sua senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </label>
            {loading && (<input type="submit" value="Aguarde..." className="btn" disabled/>)}
            {!loading && <input type="submit" value="Cadastrar" className="btn"/>}
            {error && <p className="error">{error}</p>}
        </form>
    </div>
  )
}

export default Register