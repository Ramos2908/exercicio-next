'use client'

import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <h1>
        Bem-vindo à biblioteca do ifpb!
      </h1>

      <Image
      src="/logo-ifpb.png"
      alt="logo ifpb "
      width={400}
      height={300}
      />
      <p>
        Explore nossa coleção de livros, artigos e recursos digitais.
      </p>
    </div>
  );
}
