"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
//IMPORTAÇÃO DO REACT E DO HOOK useState.
import {useState} from "react";

export default function LoginUsers() {

        //MSG ERRO
        const [msg, setMsg] = useState("");

        //REDIRECIONADOR DE PÁGINAS DO NEXT.
        const navigate = useRouter();

        //ESTRUTURA DE DADOS PARA ARMAZENAR O USUÁRIO.
        const [usuario,setUsuario] = useState({
            "info":"login",
            "email":"",
            "senha":""
        });
        //A FUNÇÃO ABAIXO QUE É RESPONSÁVEL POR PREENCHER O ESTADO COM OS DADOS DO USUÁRIO.
        const handleChange = (e) => {
            //DESESTRUTURANDO OS INPUTS DO FORMULÁRIO DE LOGIN PARA PREENCHER O ESTADO.
            const {name,value} = e.target;
            //ATUALIZANDO O ESTADO DO USUÁRIO.
            setUsuario({...usuario,[name]:value});
        }
        //A FUNÇÃO ABAIXO QUE É RESPONSÁVEL POR VALIDAR O LOGIN DO USUÁRIO E RETORNAR UMA MENSAGEM DE SUCESSO OU ERRO.
        const handleSubmit = async (e) => {
            e.preventDefault();

            try {
                
                //Realizando a requisição para o backend.
                const response = await fetch("http://localhost:3000/api/base/base-users",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(usuario)
                });

                //Verificando se a requisição foi bem sucedida.
                if(response.ok){
                    const data = await response.json();

                    //Verificando se o usuário existe.
                    if(data.status){

                        //Gerar um token para o usuário.
                        const token = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
                        
                        //Armazenar o token no sessionStorage.
                        sessionStorage.setItem("token-user",token);

                        //Armazenar o obj-usuário no sessionStorage.
                        sessionStorage.setItem("obj-user",JSON.stringify(data.usuario));

                        //REDIRECIONANDO O USUÁRIO PARA A PÁGINA DE HOME.
                        setMsg("Login realizado com sucesso!");
                        setTimeout(() => {
                            setMsg("");
                           window.location.href = "/";
                        }, 5000);
                        
                    }else{
                        //Caso o login esteja incorreto, iremos limpar o estado e redirecionar o usuário para a página de login mesmo.
                        setMsg("Login incorreto!");
                        //REDIRECIONANDO O USUÁRIO PARA A PÁGINA DE LOGIN.
                        setTimeout(() => {
                            setMsg("");
                            setUsuario({
                                "info":"login",
                                "email":"",
                                "senha":""
                            });
                            navigate.push("/login");
                        }, 5000);

                    }
                }


            } catch (error) {
                //REDIRECIONANDO O USUÁRIO PARA A PÁGINA DE ERRO.
                //IREMOS REDIRECIONAR O USUÁRIO PARA A PÁGINA DE 404
                console.log(error);
                navigate.push("/error");
            }
        }

  return (
    <div>
        <h1>Identificação de Usuários</h1>
        <h2 className="bg-orange-500 text-4xl">{msg}</h2>
        <div className="forms-login-cad">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>LOGIN</legend>
                    <div>
                        <label htmlFor="idEmail">Email:</label>
                        <input type="email" name="email" id="idEmail" placeholder="Digite seu Email." value={usuario.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="idSenha">Senha:</label>
                        <input type="password" name="senha" id="idSenha" placeholder="Digite sua Senha." value={usuario.senha} onChange={handleChange}/>
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                    <div>
                        <p>Se você ainda não tem cadastro conosco. <Link href = "/login/cad">CLIQUE AQUI</Link>.</p>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
  )
}