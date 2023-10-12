import Image from "next/image";
import Link from 'next/link';

export default function Calca() {
    return (
        <div>
            <h1>CALÇA</h1>
            <div>
                <figure>
                    <Image src="/img/bag-1868758_1280.jpg" alt="Calça" width={320} height={188} />
                </figure>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, doloremque!</p>
                <p>Voltar...</p>
            </div>
        </div>
    )
}
