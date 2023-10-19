import Image from "next/image";
import Link from 'next/link';

export default function Meia() {
    return (
        <div>
            <h1>MEIA</h1>
            <div>
                <figure>
                    <Image src="/img/feet-932346_1280.jpg" alt="Meia" width={320} height={188} />
                </figure>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, doloremque!</p>
                <p><Link href="/">Voltar...</Link></p>
            </div>
        </div>
    )
}
