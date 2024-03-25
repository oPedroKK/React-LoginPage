import styles from "./login.module.css"
import loggedAccounts from "../../json/loggedAcc.json"
import { useState } from "react"

function Login() {

    const [message, identify] = useState('')
    const [color, getColor] = useState('')

    const [username, getUser] = useState('')
    const [password, getPass] = useState('')

    const loginFunction = () => {
        let checkLogin = false;

        if(!password || !username){
            identify('Preencha todos os campos!')
            getColor('red')
            return;
        }

        for(const buscarUsuario of loggedAccounts){
            if(buscarUsuario.username === username && buscarUsuario.pass === password){
                identify('Logado com sucesso!')
                getColor('green')

                checkLogin = true;
                break;
            } 
            
            else if(buscarUsuario.username === username && buscarUsuario.pass !== password){
                identify('Senha incorreta! Por favor, verifique-a novamente.')
                getColor('red')

                checkLogin = true;
                break;
            } 

        }

        if(!checkLogin){
            identify('Usuário não encontrado!')
            getColor('red')
        }
    
    }

    return(
        <section className={styles.login}>
            
            <h1>Já possue uma conta? Entre agora!</h1>

            <span style={{color: color}}>{ message }</span>

            <div className={styles.loginInfos}>

                <p>Nome de usuário</p>
                <input 
                type="text" 
                placeholder="Coloque seu nome de usuário aqui!"
                id="username"
                value={username}
                onChange={e => getUser(e.target.value)}/>

                <p>Senha</p>
                <input 
                type="password" 
                placeholder="Coloque sua senha aqui!"
                id="pass"
                value={password}
                onChange={e => getPass(e.target.value)}/>

                <button onClick={loginFunction}>Entrar</button>
            </div>

        </section>
    );
}

export default Login;