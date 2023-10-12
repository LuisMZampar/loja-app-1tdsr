import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <div>
        <figure>
          <figure>
            <Image src="/img/promocao.jpg" alt="Promocao" width={640} height={464}/>
          </figure>
        </figure>
      </div>

    </div>
  );
}
