import styles from "./register.module.css"
import loggedAccounts from "../../json/loggedAcc.json"
import validEmails from "../../json/validEmails.json"
import { useState } from "react"

function Register() {

    const [repeatedPass, getRepPass] = useState()
    const [message, identify] = useState('')
    const [color, getColor] = useState('')
    const [validEmail, setValidEmail] = useState(false);

    const registerFunction = () => {
        const username = document.getElementById('username').value
        const email = document.getElementById('email').value
        const pass = document.getElementById('pass').value

        const verifyEmail = () => {
            for (const emailCheck of validEmails) {
                if (email.includes(emailCheck)) {
                    setValidEmail(true);
                    return;
                }
            }
            setValidEmail(false);
        }
        
        for(const verifyRep of loggedAccounts){
            if(verifyRep.username === username){
                identify('Nome de usuário já utilizado. Use outro!')
                getColor('red')
                return;
            } 

            if(verifyRep.email === email){
                identify('Email já utilizado. Use outro!')
                getColor('red')
                return;
            }
        }

        if(!username || !email || !pass){
            identify('Você precisa preencher todos os campos!')
            getColor('red')
            return;
        }

        verifyEmail();

        if(validEmail){
            identify('Insira um email valido.')
            getColor('red')
            return;
        }

        if(pass.length < 6){
            identify('Sua senha deve conter 6 ou mais caracteres.')
            getColor('red')
            return;
        }

        if(repeatedPass !== pass){
            identify('As senhas não coincidem!')
            getColor('red')
            return;
        }

        const novoUsuario = {
                email,
                username,
                pass
        }
        
        loggedAccounts.push(novoUsuario);
        
        identify('Sua conta foi cadastrada com sucesso!')
        getColor('green')
    }

    return(
        <section className={styles.register}>
            
            <h1>Crie sua conta agora mesmo de graça!</h1>

            <span style={{color: color}}>{ message }</span>

            <div className={styles.registerInfos}>

                <p>Nome de usuário</p>
                <input 
                type="text" 
                placeholder="Ex: John Doe"
                id="username"/>

                <p>Email</p>
                <input 
                type="text" 
                placeholder="Ex: Jonh442@hotmail.com"
                id="email"/>

                <p>Senha</p>
                <input 
                type="password" 
                placeholder="Ex: senha123"
                id="pass"/>

                <p>Confirmar senha</p>
                <input 
                type="password" 
                placeholder="Repita a senha criada."
                id="repeatedPass"
                value={repeatedPass}
                onChange={e => getRepPass(e.target.value)}/>

                <button onClick={registerFunction}>Criar conta</button>
            </div>

        </section>
    );
}

export default Register;