import Link from 'next/link';

export default function Cabecalho() {
    return (
        <div>
            <header className="bg-gray-800 text-white">
                <nav className="p-linha">
                    <p><Link href="/produtos/tenis">TENIS</Link></p>
                    <p><Link href="/produtos/camisa">CAMISA</Link></p>
                    <p><Link href="/produtos/meia">MEIA</Link></p>
                    <p><Link href="/produtos/calca">CALÇA</Link></p>
                </nav>
            </header>
        </div>
    )
}
