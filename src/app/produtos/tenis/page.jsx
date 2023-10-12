import Image from 'next/image';
import Link from 'next/link';

export default function Calca() {
    return (
        <div>
            <h1>TENIS</h1>
            <div>
                <figure>
                    <Image src="/img/shoes-2216498_1280.jpg" alt="Calça" width={320} height={188}/>
                </figure>
                <p>O tênis Adidas é um exemplo perfeito de estilo e desempenho. Com um design elegante e moderno, ele combina conforto e durabilidade para atender às necessidades dos atletas e entusiastas da moda. Com a icônica marca das três listras, o tênis da Adidas não só oferece suporte excepcional aos pés, mas também adiciona um toque de estilo esportivo a qualquer visual. Seja para corridas, treinos ou simplesmente para um visual casual, o tênis Adidas é uma escolha confiável e estilosa.</p>
                <p><Link href="/">Voltar...</Link></p>
            </div>
        </div>
    );
}