import Image from "next/image";
import Link from 'next/link';

export default function Camisa() {
    return (
        <div>
            <h1>CAMISA</h1>
            <div>
                <figure>
                    <Image src="/img/t-shirt-1976334_1280.png" alt="Camisa" width={280} height={260} />
                </figure>
                <p>Uma camiseta é uma peça de roupa simples, confortável e versátil, disponível em várias cores e estilos. É uma escolha popular para uso diário e pode ser personalizada para refletir o estilo pessoal. É um item essencial no guarda-roupa.</p>
                <p><Link href="/">Voltar...</Link></p>
            </div>
        </div>
    )
}
