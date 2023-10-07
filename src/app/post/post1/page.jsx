import Image from "next/image";
import Link from "next/link";

export default function Post1() {
  return (
    <div>
      <div>
        <h1>POST-1</h1>
        <p>
          <Link href="/">Voltar</Link>
        </p>
        <figure>
          <Image
            src="/img/cat-8257177_1280.jpg"
            width={320}
            height={320}
            alt="Post-It"
          />
          <figcaption>
            <Link href="/">Go back to home page.</Link>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
