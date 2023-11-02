"use client"

import { useState } from "react";

export default function LoginUsers() {

    const navigate = useRouter();

    const [usuario, setUsuario] = useState({
        "email": "",
        "senha": ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value })
    }


    const handleSubmit = async (e) =>{
        e.prevenDefault();

        try {
            const response = await fetch("http://localhost:3000/api/base/base-users",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(usuario)
            });

            if(response.ok){
                const data = await response.json();

                if(data.status){
                    navigate.push("/");

                }else{
                    navigate.push("/error");
                }
            }
            
        } catch (error) {
            console.log(error);
            navigate.push("/error");
            
        }
    }

    return (
        <div>
            <h1>Identificação de Usuários</h1>

            <div className="forms-login-cad">
                <form>
                    <fieldset>
                        <legend>LOGIN</legend>
                        <div>
                            <label htmlFor="idEmail">Email:</label>
                            <input type="email" name="email" id="idEmail" placeholder="Digite seu Email." value={usuario.email} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="idSenha">Senha:</label>
                            <input type="password" name="senha" id="idSenha" placeholder="Digite sua Senha." value={usuario.senha} onChange={handleChange} required />
                        </div>
                        <div>
                            <button>Login</button>
                        </div>
                        <div>
                            <p>Se você ainda não tem cadastro conosco. CLIQUE AQUI.</p>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}