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

export async function POST(request, response) {
  //RECEBENDO OS DADOS ENVIADOS MA REQUISIÇÃO
  const usuario = await request.json();

  const body = await JSON.parse(file);

  for (let x = 0; x < body.usuarios; x++) {
    const u = body.usuarios[x];

    if (u.email == usuario.email && u.senha == usuario.senha) {
      //RETORNO DA REQUISIÇÃO
      return NextResponse.json({ status: "ok" });
    }
  }

  return NextResponse.json({ status: "error" });
}
