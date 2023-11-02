import { promises as fs } from "fs";
import { NextResponse } from "next/server";

const file = await fs.readFile(
  process.cwd() + "/src/app/api/base/data.json",
  "utf8"
);

export async function GET() {
  //PARSEANDO A BASE DE DADOS DOS USUARIOS
  const body = JSON.parse(file);

  //RETORNADNO UM STATUS
  return NextResponse.json(body);
}

const handleLogin = async (email, senha) => {
  const body = await JSON.parse(file);

  //Sistema de validacao de login, retornando um usuario, ou undefined caso não encontre
  const usuarioValidado = body.usuarios.find((user) => user.email == email && user.senha == senha)

  return usuarioValidado;

}

export async function POST(request, response) {

  //RECEBENDO OS DADOS ENVIADOS MA REQUISIÇÃO
  const { email, senha } = await request.json();

  //Validando login
  //uv = Usuario validado
  const uv = await handleLogin(email, senha);

  //Caso usuario seja valido, retorna true, caso contrario, retorna false
  if (uv) {
    return NextResponse.json({ "status": true })
  }

  return NextResponse.json({ "error": false });


}
